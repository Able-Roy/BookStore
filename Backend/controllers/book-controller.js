const mongoose = require("mongoose");
const Book = require("../models/Book");
const HttpError = require("../models/http-error");

const getMaxSortOrder = async () => {
  let sortOrder;
  let recordCount;

  // fetch the documents counts
  try {
    recordCount = await Book.countDocuments();
    console.log("recordCount is ", recordCount);
  } catch (err) {
    console.log(err);
    throw new HttpError("error connecting mongodb", 500);
  }

  // if the records not found. Then there is no records. return sort order 0
  if (recordCount) {
    try {
      // find max sort order from mongoDB
      const maxSortOrder = await Book.find({})
        .select("sortOrder -_id")
        .sort("-sortOrder")
        .limit(1)
        .exec();

      sortOrder = maxSortOrder[0].sortOrder;
    } catch (err) {
      console.log(err);
      throw new HttpError("error getting max sort order");
    }
  } else {
    sortOrder = 0;
  }
  console.log("sort order before return is ", sortOrder);
  // return maxSortOrder
  return sortOrder;
};

/*
    function to add Book
*/
const addBook = async (req, res, next) => {
  let {
    name,
    categoryId,
    author,
    isbn,
    edition,
    language,
    binding,
    image,
    details,
  } = req.body;
  let newBook;

  // updated sortOrder
  let sortOrder = (await getMaxSortOrder()) + 1;
  console.log("sort order is ", sortOrder);
  categoryId = mongoose.Types.ObjectId(categoryId);

  newBook = new Book({
    name,
    categoryId,
    author,
    isbn,
    edition,
    language,
    binding,
    image,
    details,
    sortOrder,
  });
  try {
    await newBook.save();
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("Unable To Add Book Please Try After Some Time", 500)
    );
  }
  res
    .status(201)
    .json({ message: "Record Added Successfully", id: newBook._id });
};

/*
  function to get books details
*/
const getBooks = async (req, res, next) => {
  const { categoryId } = req.body;
  let books;

  try {
    //find books
    books = await Book.find({
      $and: [{ active: "Y" }, { deleted: "N" }],
    }).populate('categoryId').exec();
  } catch (er) {
    console.log(err);
    return next(
      new HttpError(
        "unable to fetch data from server, please try agiane after some time",
        500
      )
    );
  }

  //if books found then send response
  if(books != null){
    res.json(books);
  }
  else{
    res.json({message: 'No Records Found'});
  }
};

/*
  function to update book
*/
const updateBook = async(req, res, next) => {
 const {bookId} = req.body;
 const inputValues = Object.keys(req.body);
 const update = {};

 //creating dynamic query
 for(let i=0; i< inputValues.length; i++){
   update[inputValues[i]] = Object.values(req.body)[i];
 }

 //update query for book
 try{
   await Book.updateOne({'_id': bookId}, {$set: update});
 }
 catch(err){
   console.log(err);
   return next(new HttpError('Unable To Update Book', 500));
 }
 res.status(201).json({message: 'Record Updated Successfully'});
}

/*
  function to soft delete book record
*/
const deleteBook = async(req, res, next) => {
  const {bookId} = req.body;
  const updates = {};
  updates.deleted = "Y";
  updates.deletedAt = Date.now;
  try{
    await Book.updateOne({_id: bookId}, {$set: updates});
  }
  catch(err){
    console.log(err);
    return next(new HttpError('Unable To Delete Record', 500));
  }
  res.status(200).json({message: 'Record Deleted Successfully'});
}

exports.addBook = addBook;
exports.getBooks = getBooks;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;

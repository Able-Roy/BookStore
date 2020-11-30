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
        .select("sortorder -_id")
        .sort("-sortorder")
        .limit(1)
        .exec();

      sortOrder = maxSortOrder[0].sortorder;
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
    categoryid: categoryId,
    author,
    isbn,
    edition,
    language,
    binding,
    image,
    details,
    sortorder: sortOrder,
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
const getbooks = async (req, res, next) => {
  const { categoryId } = req.body;
  let books;

  try {
    //find books
    books = await Book.find({
      $and: [{ active: "Y" }, { deleted: "N" }],
    });
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

exports.addBook = addBook;
exports.getbooks = getbooks;

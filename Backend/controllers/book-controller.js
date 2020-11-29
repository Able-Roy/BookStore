const Book = require('../models/Book');
const HttpError = require('../models/http-error');

const getMaxSortOrder = async () => {
  let sortOrder;
  let recordCount;

  // fetch the documents counts
  try {
    recordCount = await Book.countDocuments();
  }
  catch (err) {
    console.log(err);
    throw new HttpError('error connecting mongodb', 500);
  }

  // if the records not found. Then there is no records. return sort order 0
  if (recordCount) {
    try {
      // find max sort order from mongoDB
      const maxSortOrder = await Book.find({})
        .select('sortorder -_id')
        .sort('-sortorder')
        .limit(1)
        .exec();

      sortOrder = maxSortOrder[0].sortOrder;
    }
    catch (err) {
      console.log(err);
      throw new HttpError('error getting max sort order');
    }
  }
  else {
    sortOrder = 0;
  }

  // return maxSortOrder
  return sortOrder;
};

/*
    function to add Book
*/
const addBook = async (req, res, next) => {
  const {
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
  });
  try {
    await newBook.save();
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("Unable To Create User Please Try After Some Time", 500)
    );
  }
};

exports.addBook = addBook;

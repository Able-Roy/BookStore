/* eslint-disable linebreak-style */
const Category = require('../models/category');
const HttpError = require('../models/http-error');

/*
    fetch catagories from database and send it as a json response.
*/
const getCategory = async (req, res, next) => {
  let categories;
  let jsonResponse;
  try {
    categories = await Category.find({
      $or: [
        { active: 'Y' },
        { endeffdt: null },
        { endeffdt: { $gt: Date.now() } },
        { endeffdt: Date.now() },
      ],
    });
  } catch (err) {
    return next(new HttpError('unable to find result from database', 500));
  }

  // if categories is found
  if (categories == null) {
    jsonResponse = 'No Records Were Found';
  } else {
    jsonResponse = categories;
  }
  res.status(200).json(jsonResponse);
  return next();
};

/*
    function to find the max sort order
*/
const getMaxSortOrder = async () => {
  let sortOrder;
  let recordCount;

  // fetch the documents counts
  try {
    recordCount = await Category.countDocuments();
  } catch (err) {
    console.log(err);
    throw new HttpError('error connecting mongodb', 500);
  }

  // if the records not found. Then there is no records. return sort order 0
  if (recordCount) {
    try {
      // find max sort order from mongoDB
      const maxSortOrder = await Category.find({})
        .select('sortOrder -_id')
        .sort('-sortOrder')
        .limit(1)
        .exec();

      sortOrder = maxSortOrder[0].sortOrder;
    } catch (err) {
      console.log(err);
      throw new HttpError('error getting max sort order');
    }
  } else {
    sortOrder = 0;
  }

  // return maxSortOrder
  return sortOrder;
};

/*
    function to add data to database
*/
const addCategory = async (req, res, next) => {
  // extracting request to variables
  const { name } = req.body;
  let sortOrder;
  try {
    // updated sortOrder
    sortOrder = (await getMaxSortOrder()) + 1;

    // query to add category
    const addedCategory = new Category({ name, sortOrder });
    await addedCategory.save();
    res.status(201).json({
      // eslint-disable-next-line no-underscore-dangle
      id: addedCategory._id,
      message: 'Resource Created Successfully',
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to add category', 500));
  }
  return next();
};

/*
  function to update Category
*/
const updateCategory = async (req, res, next) => {
  const { categoryId, name } = req.body;
  let category;

  try {
    category = await Category.findById(categoryId);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError('unable to find the record with the specified id', 500),
    );
  }
  console.log(category);
  try {
    // if category found with given id
    if (category) {
      category.name = name;
      await category.save();
      res.status(200).json({ message: 'Category Updated Successfully' });
    } else {
      return next(
        new HttpError('unable to find the record with the specified id', 500),
      );
    }
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to update the record', 500));
  }
  return next();
};

/*
  Delete Category
*/
const deleteCategory = async (req, res, next) => {
  let category;
  const { categoryId } = req.body;

  try {
    // fetch the category with the provided id.
    category = await Category.findById(categoryId);
  } catch (err) {
    return next(new HttpError('unable to delete record', 500));
  }

  if (category != null) {
    category.endeffdt = Date.now();
    try {
      category.save();
    } catch (err) {
      return next(new HttpError('unable to delete record', 500));
    }
  } else {
    console.log(category);
    return next(new HttpError('invalid id passed', 400));
  }
  res.status(200).json({ message: 'record Deleted Successfully' });
  return next();
};

exports.getCategory = getCategory;
exports.addCategory = addCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;

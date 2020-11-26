const mongoose = require("mongoose");
const category = require("../models/category");

const Category = require("../models/category");
const HttpError = require("../models/http-error");
mongoose.set('debug', true);

/*
    fetch categorys from database and send it as a json response.
*/
const getCategory = async (req, res, next) => {
  try {
    categorys = await Category.find();
  } catch (err) {
    return next(new HttpError("unable to find result from databse", 500));
  }
  res.json(categorys);
};

/*
    function to add data to database
*/
const addCategory = async (req, res, next) => {
  //extracting request to variables
  name = req.body.name;
  try {
    //updated sortOrder
    sortOrder = (await getMaxSortOrder()) + 1;

    //query to add category
    addedcategory = new Category({ name, sortOrder });
    await addedcategory.save();
    res
      .status(201)
      .json({
        id: addedcategory._id,
        message: "Resource Created Successfully",
      });
  } catch (err) {
    console.log(err);
    return next(new HttpError("unable to add category", 500));
  }
};

/*
    function to find the max sort order
*/
const getMaxSortOrder = async () => {
  try {
    //find max sort order from mongoDB
    maxSortOrder = await Category.find({})
      .select("sortOrder -_id")
      .sort("-sortOrder")
      .limit(1)
      .exec();
  } catch (err) {
    console.log(err);
    throw new HttpError("error getting max sort order");
  }
  //return maxSortOrder
  return maxSortOrder[0].sortOrder;
};

/*
  function to update Category
*/
const updateCategory = async (req, res, next) => {
  let { categoryId, name } = req.body;

  //categoryId = mongoose.Types.ObjectId(categoryId)
  console.log(categoryId);

  try {
    const category = await Category.findById(categoryId);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("unable to find the record with the spcified id", 500)
    );
  }
  try {
    //if category found with given id
    if (category) {
      console.log(category);
      category.name = name;
      console.log(category);
      await category.save();
      console.log(updatedCategory);
    }
    //return error message record not found.
    else {
      return next(
        new HttpError("unable to find the record with the spcified id", 500)
      );
    }
  } catch (err) {
    console.log(err);
    return next(new HttpError("unable to update the record", 500));
  }
};

exports.getCategory = getCategory;
exports.addCategory = addCategory;
exports.updateCategory = updateCategory;

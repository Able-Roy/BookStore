const mongoose = require("mongoose");
const category = require("../models/category");

const Category = require("../models/category");
const HttpError = require("../models/http-error");
mongoose.set("debug", true);

/*
    fetch categorys from database and send it as a json response.
*/
const getCategory = async (req, res, next) => {
  let categories;
  try {
    categories = await Category.find();
  } catch (err) {
    return next(new HttpError("unable to find result from databse", 500));
  }
  res.json(categories);
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
    addedCategory = new Category({ name, sortOrder });
    await addedCategory.save();
    res.status(201).json({
      id: addedCategory._id,
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
  let category;
  
  try {
    category = await Category.findById(categoryId);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("unable to find the record with the spcified id", 500)
    );
  }
  console.log(category);
  try {
    //if category found with given id
    if (category) {
      category.name = name;
      await category.save();
      res.status(200).json({message: "Category Updated Successfully"})
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

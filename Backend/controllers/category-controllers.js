const category = require("../models/category");
const categoryModel = require("../models/category");
const httpError = require("../models/http-error");

/*
    fetch categorys from database and send it as a json response.
*/
const getCategory = async (req, res, next) => {
  try {
    categorys = await categoryModel.find();
  } catch (err) {
    return next(new httpError("unable to find result from databse", 500));
  }
  res.json(categorys);
};

/*
    function to add data to database
*/
const addCategory = async (req, res, next) => {
  //extracting request to variables
  name = req.name;
  try {
    sortOrder = (await getMaxSortOrder()) + 1;

    //query to add category
    addedcategory = new categoryModel({name, sortOrder});
    await addedcategory.save();
    res.json(sortOrder);
  } catch (err) {
      console.log(err);
    return next(new httpError("unable to add category", 500));
  }
};

/*
    function to find the max sort order
*/
const getMaxSortOrder = async () => {
  try {
    maxSortOrder = await categoryModel
      .find({})
      .select("sortOrder -_id")
      .sort("-sortOrder")
      .limit(1)
      .exec();
    console.log(maxSortOrder[0].sortOrder);
  } catch (err) {
    throw new httpError("error getting max sort order");
  }

  return maxSortOrder[0].sortOrder;
};
exports.getCategory = getCategory;
exports.addCategory = addCategory;

express = require('express');
router = express.Router();

//category controller
const categoryController = require('../controllers/category-controllers');

//routes
router.get('/categorys', categoryController.getCategory);
router.get('/categorys/add', categoryController.addCategory);
router.get('/categorys/edit', categoryController.updateCategory);

module.exports = router;
express = require('express');
router = express.Router();

//category controller
const categoryController = require('../controllers/category-controllers');

//routes
router.get('/categories', categoryController.getCategory);
router.get('/categories/add', categoryController.addCategory);
router.get('/categories/edit', categoryController.updateCategory);

module.exports = router;
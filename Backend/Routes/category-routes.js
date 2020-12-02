const express = require('express');

const router = express.Router();

// category controller
const categoryController = require('../controllers/category-controllers');

// routes
router.get('/', categoryController.getCategory);
router.get('/add', categoryController.addCategory);
router.get('/edit', categoryController.updateCategory);
router.get('/delete', categoryController.deleteCategory);

module.exports = router;

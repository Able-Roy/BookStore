express = require('express');
router = express.Router();

const categoryController = require('../controllers/category-controllers');

router.get('/categorys', categoryController.getCategory);
router.get('/categorys/add', categoryController.addCategory);
module.exports = router;
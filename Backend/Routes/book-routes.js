const express = require('express');

const router = express.Router();

// book controller
const bookRoutes = require('../controllers/book-controller');

// routes for books

router.get('/add', bookRoutes.addBook);
router.get('/', bookRoutes.getbooks);

module.exports = router;

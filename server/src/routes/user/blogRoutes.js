const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/user/blogController');

// Blogs routes
router.get('/blogs', blogController.getAllBlogs);

module.exports = router;

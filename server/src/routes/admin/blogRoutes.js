const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/admin/blogController');

// Blogs routes
router.post('/blogs', blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs);
router.put('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;

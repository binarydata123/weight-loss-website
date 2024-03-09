const express = require('express');
const authRoutes = require('./frontend/authRoutes');
const adminBlogRoutes = require('./admin/blogRoutes');
const userBlogRoutes = require('./user/blogRoutes');

const router = express.Router();

// Frontend Routes
router.use('/api/auth', authRoutes);

// Admin Routes
router.use('/api/admin', adminBlogRoutes);

// End User Routes
router.use('/api/user', userBlogRoutes);

module.exports = router;

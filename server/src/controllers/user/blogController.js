const Blog = require('../../models/Blog');

const blogController = {
	getAllBlogs: async (req, res) => {
		try {
			const blogs = await Blog.find();

			res.json(blogs);
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	}
};

module.exports = blogController;

const Blog = require('../../models/Blog');

const blogController = {
	createBlog: async (req, res) => {
		try {
			const { title, content } = req.body;

			const newBlog = new Blog({ title, content });
			await newBlog.save();

			res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	getAllBlogs: async (req, res) => {
		try {
			const blogs = await Blog.find();

			res.json(blogs);
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	updateBlog: async (req, res) => {
		try {
			const { id } = req.params;
			const { title, content } = req.body;

			const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });

			if (!updatedBlog) {
				return res.status(404).json({ message: 'Blog not found' });
			}

			res.json({ message: 'Blog updated successfully', blog: updatedBlog });
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	deleteBlog: async (req, res) => {
		try {
			const { id } = req.params;

			const deletedBlog = await Blog.findByIdAndDelete(id);

			if (!deletedBlog) {
				return res.status(404).json({ message: 'Blog not found' });
			}

			res.json({ message: 'Blog deleted successfully', blog: deletedBlog });
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	}
};

module.exports = blogController;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const authController = {
	register: async (req, res) => {
		try {
			const { email, password, firstName, lastName, age, gender } = req.body;

			const existingEmail = await User.findOne({ email });
			if (existingEmail) {
				return res.status(400).json({ message: 'Email already exists' });
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			const newUser = new User({
				email,
				firstName,
				lastName,
				age,
				gender,
				password: hashedPassword,
				role: 'user'
			});

			await newUser.save();

			res.status(201).json({ message: 'User registered successfully' });
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	login: async (req, res) => {
		try {
			const { email, password } = req.body;

			const user = await User.findOne({ email });
			if (!user) {
				return res.status(401).json({ status: false, message: 'Invalid credentials' });
			}

			const isPasswordValid = await bcrypt.compare(password, user.password);
			if (!isPasswordValid) {
				return res.status(401).json({ status: false, message: 'Invalid credentials' });
			}

			const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
				expiresIn: '1h'
			});

			const userData = {
				userId: user._id,
				email: user.email
			};

			res.json({ status: true, token, user: userData });
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	logout: async (req, res) => {
		// Implement logout logic if needed
		res.json({ message: 'Logout successful' });
	}
};

module.exports = authController;

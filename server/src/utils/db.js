const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 5000
		});

		console.log(`MongoDB Connected: ${connection.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		// process.exit(1);
		throw new Error('Unable to connect to MongoDB');
	}
};

module.exports = connectDB;

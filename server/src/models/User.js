const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	age: { type: Number, default: null },
	gender: { type: String, enum: ['male', 'female', 'other'], required: true },
	password: { type: String, required: true },
	role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

// Create an index on the email field
userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

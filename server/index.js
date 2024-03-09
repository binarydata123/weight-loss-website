const express = require('express');
const connectDB = require('./src/utils/db');
const app = express();
const cors = require('cors');
const routes = require('./src/routes');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Call all routes
app.use(routes);

app.get('/', async (req, res) => {
	res.send('Welcome to the Api');
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js

const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the user routes
app.use('/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

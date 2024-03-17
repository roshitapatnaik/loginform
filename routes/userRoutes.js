// userRoutes.js

const express = require('express');
const router = express.Router();

// Define the user sign-up endpoint
router.post('/signup', (req, res) => {
  // Handle sign-up logic
  res.send('Sign-up endpoint reached');
});

// Define the user login endpoint
router.post('/login', (req, res) => {
  // Handle login logic
  res.send('Login endpoint reached');
});

module.exports = router;
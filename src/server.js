// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // You can choose any available port

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Sample in-memory database for user data (replace with MySQL database in your actual project)
const users = [];

// Endpoint for user login
app.post('/login', (req, res) => {
  const { usernameOrEmail, password } = req.body;

  // Sample logic for user authentication (replace with actual authentication logic)
  const user = users.find((u) => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password);

  if (user) {
    res.status(200).json({ success: true, message: 'Login successful', user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Endpoint for user sign-up
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Sample logic for user registration (replace with actual registration logic)
  const existingUser = users.find((u) => u.username === username || u.email === email);

  if (existingUser) {
    res.status(409).json({ success: false, message: 'Username or email already exists' });
  } else {
    const newUser = { username, email, password };
    users.push(newUser);
    res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

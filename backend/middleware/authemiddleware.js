// Middleware for role-based access control
function checkAdminRole(req, res, next) {
  if (req.user.role === 'admin') {
    next(); // Allow access
  } else {
    res.status(403).send('Access denied');
  }
}

// Protected route that requires admin role
app.get('/admin/dashboard', checkAdminRole, (req, res) => {
  // Handle admin dashboard logic
});
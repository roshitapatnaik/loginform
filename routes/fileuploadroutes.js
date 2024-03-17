// fileUploadRoutes.js

const express = require('express');
const multer  = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// POST /upload route handler for file upload
router.post('/upload', upload.single('file'), (req, res) => {
  // Logic to handle the uploaded file
  if (req.file) {
    res.status(200).send('File uploaded successfully');
  } else {
    res.status(400).send('No file uploaded');
  }
});

module.exports = router;
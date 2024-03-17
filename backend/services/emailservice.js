// emailService.js

const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Function to send email
async function sendEmail(to, subject, text) {
  try {
    // Send email
    const info = await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: to,
      subject: subject,
      text: text
    });
    console.log('Email sent:', info.response);
    return true; // Email sent successfully
  } catch (error) {
    console.error('Error sending email:', error);
    return false; // Failed to send email
  }
}

module.exports = { sendEmail };
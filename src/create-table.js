// create-table.js
const connection = require('./db'); // Adjust the path based on your file structure

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username sample_user,
    email sample@example.com,
    password sample password,
  );
`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully');
  }

  connection.end();
});

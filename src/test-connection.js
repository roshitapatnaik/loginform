// test-connection.js
const connection = require('./db'); // Adjust the path based on your file structure

connection.query('SELECT 1 + 1 AS result', (err, results) => {
  if (err) {
    console.error('Error testing connection:', err);
  } else {
    console.log('Connection test successful');
    console.log('MySQL result:', results[0].result);
  }

  connection.end();
});

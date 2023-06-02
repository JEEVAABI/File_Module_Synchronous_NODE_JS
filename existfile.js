const fs = require('fs');

// Check if file exists synchronously
const fileExists = fs.existsSync('file.txt');
console.log('File exists:', fileExists);


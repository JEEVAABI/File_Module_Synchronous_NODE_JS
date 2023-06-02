const fs = require('fs');
// Write to file synchronously
try {
    fs.writeFileSync('newfile.txt', 'Hello, World!', 'utf8');
    console.log('File written successfully');
  } catch (error) {
    console.error('Error writing file:', error);
  }
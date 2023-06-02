const fs = require('fs');

// Rename file synchronously
try {
    fs.renameSync('newfile.txt', 'renamedfile.txt');
    console.log('File renamed successfully');
  } catch (error) {
    console.error('Error renaming file:', error);
  }
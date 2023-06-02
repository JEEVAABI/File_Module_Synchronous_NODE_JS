const fs = require('fs');

// Delete file synchronously
try {
    fs.unlinkSync('renamedfile.txt');
    console.log('File deleted successfully');
  } catch (error) {
    console.error('Error deleting file:', error);
  }
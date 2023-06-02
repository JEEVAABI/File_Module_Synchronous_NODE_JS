const fs = require('fs');

// Get file information synchronously
try {
    const fileStats = fs.statSync('file.txt');
    console.log('File size:', fileStats.size, 'bytes');
    console.log('File last modified:', fileStats.mtime);
  } catch (error) {
    console.error('Error getting file information:', error);
  }
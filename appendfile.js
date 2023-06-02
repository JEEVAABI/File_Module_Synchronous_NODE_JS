const fs = require('fs');
// Append to file synchronously
try {
    fs.appendFileSync('newfile.txt', '\nAppended content', 'utf8');
    console.log('Content appended successfully');
  } catch (error) {
    console.error('Error appending to file:', error);
  }
  
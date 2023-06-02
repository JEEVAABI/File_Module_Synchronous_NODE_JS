const fs = require('fs');

// Read file synchronously
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('File content:', data);
} catch (error) {
  console.error('Error reading file:', error);
}
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;
const directoryPath = path.join(__dirname, 'build', "app"); // Change 'public' to your desired directory name

app.use(express.static(directoryPath));

app.use((req, res) => {
  const fallbackFilePath = path.join(__dirname, 'build', "app", '200.html');
  
  fs.access(fallbackFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    
    res.sendFile(fallbackFilePath);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

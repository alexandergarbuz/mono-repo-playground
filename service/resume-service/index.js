const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for your Angular app (likely running on a different port)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // For development only
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint to serve resume.json data
app.get('/api/resume', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'resume.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading resume.json:', err);
      return res.status(500).json({ error: 'Unable to read resume data' });
    }
    
    try {
      const resume = JSON.parse(data);
      res.json(resume);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).json({ error: 'Invalid resume JSON format' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Resume service listening on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

// Basic route - Home page
app.get('/', (req, res) => {
  res.send('<h1>Hello DevOps World! 🚀</h1><p>This app is running in a Docker container on AWS.</p>');
});

// Health check endpoint - Very important for DevOps
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
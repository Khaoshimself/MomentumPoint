const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5003;

// Enable CORS for all routes and origins
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the Node.js backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

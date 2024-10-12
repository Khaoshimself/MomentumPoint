const express = require('express');
const cors = require('cors');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors());

// Use stock routes
app.use('/api/stocks', stockRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const router = express.Router();
const { getStockData } = require('../controllers/stockController');

// Define the stock data route
router.get('/data', getStockData);

module.exports = router;

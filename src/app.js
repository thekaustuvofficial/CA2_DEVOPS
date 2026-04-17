const express = require('express');

const app = express();
// HI
app.use(express.json());

// Root Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the CA2 Node.js API',
    endpoints: {
      health: '/health'
    }
  });
});

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

module.exports = app;

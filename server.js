const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require('./db');

connectDB();

app.get('/api', (req, res) => {
  res.send('api running ...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app listening to port ${PORT}`);
});

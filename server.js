const express = require('express');
require('dotenv').config();
const userRouter = require('./routes/api/users');
const authRouter = require('./routes/api/auth');
const connectDB = require('./db');

connectDB();
const app = express();

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.get('/api', (req, res) => {
  res.send('api running ...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app listening to port ${PORT}`);
});

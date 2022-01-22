const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRouter = require('./routes/api/users');
const authRouter = require('./routes/api/auth');
const profileRouter = require('./routes/api/profile');
const postRouter = require('./routes/api/posts');
const connectDB = require('./db');

connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postRouter);

app.get('/api', (req, res) => {
  res.send('api running ...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app listening to port ${PORT}`);
});

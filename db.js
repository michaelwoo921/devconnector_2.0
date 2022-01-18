const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);

    console.log('connected to mongoDB');
  } catch (error) {
    console.log('failed to connect to DB');
    process.exit(1);
  }
};

module.exports = connectDB;

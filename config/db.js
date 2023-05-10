const mongoose = require('mongoose');
// const config = require('config');
require('dotenv').config();
const db = process.env.MONGO_URI; // || config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(db).then(() => {
      console.log('MongoDB Connected...');
    });
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

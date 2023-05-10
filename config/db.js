const mongoose = require('mongoose');
import http from 'http';
// const config = require('config');
require('dotenv').config();
const db = process.env.MONGO_URI; // || config.get('mongoURI');
const port = process.env.PORT || 8080;

const server = http.createServer(app);

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(db).then(() => {
      console.log('MongoDB Connected...');
      server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });
    });
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;

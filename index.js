//Importing the express server
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

//connect to database
connectDB();

//Create a express variable
var myApp = express();

//Set up the body parser
myApp.use(express.json({ extended: false }));

myApp.use('/api/users', require('./routes/api/users'));
myApp.use('/api/auth', require('./routes/api/auth'));
myApp.use('/api/profile', require('./routes/api/profile'));
myApp.use('/api/posts', require('./routes/api/post'));
myApp.use('/api/wiki', require('./routes/api/wiki'));
myApp.use('/api/tags', require('./routes/api/tags'));

// //assigning the port
// const PORT = process.env.PORT || 8080;
// myApp.listen(PORT, () => console.log(`Server started on port ${PORT}`));

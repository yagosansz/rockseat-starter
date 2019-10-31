const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting the application
const app = express();
// Allows the application to receive data in JSON format
app.use(express.json());
// Allows the application to be accessed from all domains.
app.use(cors());

// Init database
mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);
// It will require all the models under the models folder
requireDir('./src/models');

// Route(s)
// .use() can be understood as a 'wildcard' that will process
// any requests made to a route.
app.use('/api', require('./src/routes'));

// Listening on the port 3001 in the browser
app.listen(3001);
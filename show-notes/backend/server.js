const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 4000;

const mongoURI = process.env.MONGODB_URI

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

// Connect to MongoDB
 mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
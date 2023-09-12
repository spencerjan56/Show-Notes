const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = 'mongodb+srv://spencerjan56:Usafmongoose2!usafpilot@cluster0.o5jdrhj.mongodb.net/'

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};


// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

// Connect to MongoDB
 mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/// Backend functions will go down here ///

const noteSchema = new mongoose.Schema({
  text: String,
});

const Note = mongoose.model('Note', noteSchema);

app.post('/api/saveNote', async (req, res) => {
  const { text } = req.body;

  try {
    // Create or update the note in the database
    const note = await Note.findOneAndUpdate({}, { text }, { upsert: true, new: true });
    console.log('Note saved:', note);

    res.status(200).json({ note });
  } catch (error) {
    console.error('Error saving note:', error);
    res.status(500).json({ error: 'Unable to save note.' });
  }
});

// API endpoint to retrieve the editable text
app.get('/api/getNote', async (req, res) => {
  try {
    // Find and return the note from the database
    const note = await Note.findOne();

    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve note.' });
  }
});
///


/// My code looks great. I dont know why it isnt s`aving 
// anything I type into the text box. I'm in pain.
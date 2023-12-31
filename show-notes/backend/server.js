const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = 'mongodb+srv://jankowskispencer:ShowNotesPassword@cluster0.caqyua3.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'

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
  dbName: 'show-notes',
})

.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});





/// Backend functions will go down here ///






// Create collections explicitly
async function createCollections() {
  try {
    await mongoose.connection.createCollection('Note');
    await mongoose.connection.createCollection('Tile');
    await mongoose.connection.createCollection('Titles');
    await mongoose.connection.createCollection('Video');
    
    console.log('Collections created successfully');
  } catch (error) {
    console.error('Error creating collections:', error);
  }
}

// Call the function to create collections
createCollections();





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


const tileSchema = new mongoose.Schema({
  id: Number,
  imageUrl: String,
  routeTo: String,
});

const Tile = mongoose.model('Tile', tileSchema);


// API endpoint to fetch tile data
app.get('/api/getTiles', async (req, res) => {
  try {
    const tiles = await Tile.find();
    res.status(200).json({ tiles });
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve tile data.' });
  }
});

// API endpoint to update tile data
app.post('/api/updateTile/:id', async (req, res) => {
  const { id } = req.params;
  const { imageUrl } = req.body;

  try {
    // Ensure you are correctly receiving the 'id' and 'imageUrl'
    console.log('Received ID:', id);
    console.log('Received Image URL:', imageUrl);

    const updatedTile = await Tile.findOneAndUpdate(
      { id: parseInt(id) },
      { imageUrl },
      { new: true }
    );

    res.status(200).json({ updatedTile });
  } catch (error) {
    console.error('Error updating tile data:', error);
    res.status(500).json({ error: 'Unable to update tile data.' });
  }
});

///

const titlesSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
});

const Titles = mongoose.model('Titles', titlesSchema);


app.get('/api/getTitles', async (req, res) => {
  try {
    // Fetch the titles from your MongoDB database
    const titles = await Titles.findOne();

    if (!titles) {
      return res.status(404).json({ error: 'Titles not found' });
    }

    res.status(200).json({ titles });
  } catch (error) {
    console.error('Error retrieving titles:', error);
    res.status(500).json({ error: 'Unable to retrieve titles.' });
  }
});

//

app.post('/api/saveTitles', async (req, res) => {
  const { title, subtitle } = req.body;

  try {
    console.log('Received title:', title);
    console.log('Received subtitle:', subtitle);

    const titles = await Titles.findOneAndUpdate({}, { title, subtitle }, { upsert: true, new: true });
    console.log('Titles saved:', titles);

    res.status(200).json({ titles });
  } catch (error) {
    console.error('Error saving titles:', error);
    res.status(500).json({ error: 'Unable to save titles.' });
  }
});


///

const videoUrlSchema = new mongoose.Schema({
  videoUrl: String,
});

const Video = mongoose.model('Url', videoUrlSchema);

app.get('/api/getVideoUrl', async (req, res) => {
  try {
    const url = await Video.findOne();

    if (!url) {
      return res.status(404).json({ error: 'Video Url not found' });
    }

    res.status(200).json({ titles });
  } catch (error) {
    console.error('Error retrieving video url:', error);
    res.status(500).json({ error: 'Unable to retrieve video url.' });
  }
});

//

app.post('/api/saveVideoUrl', async (req, res) => {
  const { videoUrl } = req.body;

  try {
    console.log('Received video url:', videoUrl);

    const url = await Video.findOneAndUpdate({}, { videoUrl }, { upsert: true, new: true });
    console.log('Video url saved:', url);

    res.status(200).json({ url });
  } catch (error) {
    console.error('Error saving video url:', error);
    res.status(500).json({ error: 'Unable to save video url.' });
  }
});


///


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

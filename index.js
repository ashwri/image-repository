const express = require('express');
const app = express();
const mongoose = require('mongoose');
const images = require('./routes/images');

app.use(express.json());
app.use('/api/images', images)

// TODO 1: replace hard coded string with an environment / config var
// eg. process.env.MONGO_URI
// TODO 2: Remove all console logs and turn them into debug statements
mongoose.connect('mongodb://localhost/images', 
      {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDb ..', err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
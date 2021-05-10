const express = require('express');
const app = express();
const images = require('./routes/images');

app.use(express.json());
app.use('/api/images', images)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
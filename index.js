require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoString = process.env.MONGO_URI;
const blokRouter = require('./routes/routes.blokken');
const showRouter = require('./routes/routes.show');
let port = process.env.PORT || 3000;

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
});

db.once('connected', () => {
    console.log('Database connected');
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.use(cors());
app.use('/api', blokRouter);
app.use('/api', showRouter);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.MONGO_URI;
const blokRouter = require('./routes/routes.blokken');
const showRouter = require('./routes/routes.show');
const request = require('request')
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(('/api', blokRouter, next), () => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(('/api', showRouter, next), () => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    // res.send('Hello World!')
    request(
        { url: 'https://vrt-api-app.herokuapp.com/' },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }
    
          res.json(JSON.parse(body));
        }
    )
})



app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
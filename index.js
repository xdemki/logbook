require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./database/db');
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.listen(process.env.port, () => {
    console.log('Server is running! Port: ' + process.env.port);
});

const routes = require('./routes/main');

app.use('/', routes)
app.use('/api', require('./api/api'));
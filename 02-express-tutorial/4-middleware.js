const express = require('express');
const morgan = require('morgan');
const app = express();

const logger = require('./logger');
const authorize = require('./authorize');


// app.use(express.static('./public'));
// app.use([ logger, authorize ]);
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h>');
});


app.listen(5000, () => {
    console.log('server is listening');
} );
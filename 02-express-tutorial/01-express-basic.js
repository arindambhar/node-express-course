const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about',  (req, res) => {
    res.send('About Page');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h>');
});



app.listen(5000, () => {
console.log('app is listening');
})

//app.get
//app.post
//app.delete
//app.all
//app.put
//app.listen
//app.use
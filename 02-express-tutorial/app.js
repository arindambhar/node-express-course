const express = require('express');
const peopleRouter = require('./routes/people');
const loginRouter = require('./routes/login');

const app = express();

 app.use(express.static('./methods-public'));
 //what urlencoded does it decodes the body of request. Not available otherwise. Then adds it to req.body
 app.use(express.urlencoded({extended : false}));
 //parse json incoming data
 app.use(express.json());

 app.use('/api/people', peopleRouter);
 app.use('/login', loginRouter);

app.get('/api', (req, res) => {
    res.send();
});

app.listen(5000, () => {
    console.log('server is listening');
} );

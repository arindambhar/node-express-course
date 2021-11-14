const express = require('express');
let {products, people} = require('./data');
const app = express();

app.use(express.static('./methods-public'));
//what urlencoded does it decodes the body of request. Not available otherwise. Then adds it to req.body
 app.use(express.urlencoded({extended : false}));
 //parse json incoming data
 app.use(express.json());

app.get('/api/people', (req, res) => {
 res.status(200).json({success : true, data : people});
});

app.post('/api/people', (req, res) => {
    const {name } = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: 'please provide a value' });
    }
    else{
        return res.status(201).json({success:true, person: name });
    }

});

app.get('/api', (req, res) => {
res.send();
});

app.post('/login', (req, res) => {
    //console.log(req.body);
    const {name} = req.body;

    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    else{
        return res.status(401).send('please provide value');
    }
    res.send('Post');
});

app.listen(5000, () => {
    console.log('server is listening');
} );
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
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

module.exports = router;

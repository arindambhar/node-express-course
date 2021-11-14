const express = require('express');
const path = require('path');


const app = express();

//express takes care of uploading static & middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))

// });


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
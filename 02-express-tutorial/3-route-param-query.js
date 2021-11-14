const express = require('express');
const app = express();

const {products, people } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h> <a href="/api/products">Products</a>');

});

app.get('/api/products', (req, res ) => {
    const myProducts = products.map((products) => {
        const {id, name, image } = products;
        return  {id, name, image } ;
    });
    res.json(myProducts);
});

app.get('/api/products/:paramID', (req, res ) => {
    const {paramID} = req.params;
    //req.params is a object that is list of values defined as :val
    //console.log(req.params);
    const singleProduct = products.find((products) => products.id === Number(paramID));
    if(!singleProduct){
        return res.status(404).send('Product does not exists');
    }
    return res.json(singleProduct);
});

app.get('/api/v1/query', (req, res ) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((products) => {
            return products.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length <1) return res.status(200).json({success: true, data:[]});
    return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log('server is listening');
} );
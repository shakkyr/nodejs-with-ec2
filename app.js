const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('<h1>  express demo App</h1> <h4>Message: Sucess</h4>');
})

app.get('/products', (req,res) => {
    res.send([
        {
            productId: '101',
            price: 100
        },
        {
            productId: '102',
            price: 150
        }
    ])
})

app.listen(port, () => {
    console.log(`demo app runnung on port: ${port}`);
})
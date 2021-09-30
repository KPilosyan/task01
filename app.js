const express = require('express');
const app = express();
const db = require('./server/db_connect');
const products = require("./routes/products")

// Get Main Page
app.get('/', (req, res) => {
    res.send('<h2>Working on products</h2>')
});

app.use("/products", products);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
const express = require('express');
const app = express();
const db = require('./db_connect');

require('./products')(app)

// Get Main Page
app.get('/', (req, res) => {
    res.send('<h2>Working on products</h2>')
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
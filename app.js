const express = require('express');
const app = express();
const productRouter = require("./routes/product_routes")
const userRouter = require("./routes/user_routes")

const errorHandler = require('./errors/handler')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Get Main Page
app.get('/', (req, res) => {
    res.send('<h2>Working with products</h2>')
});

app.use("/products", productRouter);
app.use("/users", userRouter);

app.use(errorHandler)

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));



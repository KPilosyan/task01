const express = require('express');
const app = express();
const productRouter = require("./routes/productRoutes")
const userRouter = require("./routes/userRoutes")

const errorHandler = require('./errors/errorHandler')

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



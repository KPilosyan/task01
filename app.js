const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(express.json())

const productRouter = require("./routes/product_routes")
const userRouter = require("./routes/user_routes")

// Get Main Page
app.get('/', (req, res) => {
    res.send('<h2>Working with products</h2>')
});

app.use("/products", productRouter);
app.use("/users", userRouter)

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

// creating mock changes 
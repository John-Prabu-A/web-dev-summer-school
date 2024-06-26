const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Load config
dotenv.config();
const PORT = process.env.PORT || 8080;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${PORT}`;
// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Load models
require('./models/productModel');

// (Built in & third party) Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const productRouter = require(path.join(__dirname, 'routes', 'productRoute'));
app.use("/product", productRouter);

// Routes
const mainController = require(path.join(__dirname, 'controllers', 'serverController'));
app.get('/', mainController.getHome);
app.get('/sell', mainController.getSell);

// Listen on port 
app.listen(PORT, () => {
    console.log(`Server running on port ${ROOT_URL}`);
});
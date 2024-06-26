const path = require('path');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const productController = require(path.join(__dirname, '..', 'controllers', 'productController'));
const axios = require('axios');

module.exports = {
    getHome: (req, res) => {
        axios.get(process.env.ROOT_URL + '/product')
            .then(response => {
                res.render(path.join(__dirname, '..', 'views', 'index'), { path: req.path, products: response.data });
            })
            .catch(err => {
                res.render(path.join(__dirname, '..', 'views', 'index'), { path: req.path, products: [] });
            });
    },
    getSell: (req, res) => {
        res.render(path.join(__dirname, '..', 'views', 'sell'), { path: req.path});
    }
};
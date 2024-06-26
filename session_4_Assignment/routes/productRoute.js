const express = require('express');
const productRouter = express.Router();
const path = require('path');
const productModel = require(path.join(__dirname, '..', 'models', 'productModel'));
const productController = require(path.join(__dirname, '..', 'controllers', 'productController'));

// PRODUCT API
productRouter.get('/', productController.get);
productRouter.post('/', productController.post);
productRouter.put('/:id', productController.put);
productRouter.delete('/:id', productController.delete);

module.exports = productRouter;

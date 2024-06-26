const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    productPrice: {
        type: Number,
        required: [true, 'Please provide product price']
    },
    sellingPrice: {
        type: Number,
        required: [true, 'Please provide a selling price']
    },
    image: {
        type: String,
        required: [true, 'Please provide an image']
    },
    category: {
        type: String,
        required: [true, 'Please provide a category']
    },
    seller: {
        type: String,
        required: [true, 'Please provide a seller']
    },
    location: {
        type: String,
        required: [true, 'Please provide a location']
    },
    contactNo: {
        type: String,
        required: [true, 'Please provide a contact number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);
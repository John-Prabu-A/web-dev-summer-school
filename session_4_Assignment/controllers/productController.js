const path = require('path');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/img');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = {
    get: (req, res) => {
        if (!req.query.id) {
            Product
                .find()
                .then(products => res.json(products))
                .catch(err => res.status(500).json({ error: err.message || 'Server error' }));
        } else {
            const id = req.query.id;
            Product
                .findById(id)
                .then(product => res.json(product))
                .catch(err => res.status(500).json({ error: err.message || 'Server error' }));
        }
    },
    post: (req, res) => {
        upload.single('image')(req, res, function(err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }

            var product = {
                name: req.body['product-title'],
                description: req.body['product-description'],
                productPrice: req.body['product-price'],
                sellingPrice: req.body['selling-price'],
                image: req.file ? path.join('img', req.file.filename) : '',
                category: req.body['product-category'],
                seller: req.body['seller'],
                location: req.body['product-location'],
                contactNo: req.body['product-contact']
            };

            Product
                .create(product)
                .then(product => res.redirect('/')) // res.json(product)
                .catch(err => res.status(400).json({ error: err.message || 'Please provide all required fields' }));
        });
    },
    put: (req, res) => {
        Product
            .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
            .then(product => res.json(product))
            .catch(err => res.status(400).json({ error: err.message || 'Unable to update product' }));
    },
    delete: (req, res) => {
        Product
            .findByIdAndDelete(req.params.id)
            .then(() => res.json({ message: 'Product deleted' }))
            .catch(err => res.status(500).json({ error: err.message || 'Server error' }));
    }
};

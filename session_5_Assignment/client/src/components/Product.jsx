import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>₹{product.productPrice}</p>
            </div>
        </div>
    );
}

export default Product;

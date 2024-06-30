import React from 'react';
import Product from './Product';

const ProductListings = ({ products }) => {
    return (
        <div className="product-listings">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
}

export default ProductListings;

import React from 'react';
import "./sellPage.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
const SellPage = () => {
    return (
        <>
        <Header />
        <div>
            <img className="sell-img" src="../img/sell-page-bg.png" alt="sell-page-image" />
            <form action="/product" className="sell-container" method="post" id="add-product" enctype="multipart/form-data">
                <label htmlFor="product-title"><b>Product Title</b></label>
                <input type="text" placeholder="Enter Product Title" name="product-title" required />

                <label htmlFor="product-description"><b>Product Description</b></label>
                <textarea name="product-description" id="product-description" cols="30" rows="10" placeholder="Enter Product Description" required></textarea>

                <label htmlFor="product-price"><b>Product Price</b></label>
                <input type="text" placeholder="Enter Product Price" name="product-price" required />

                <label htmlFor="selling-price"><b>Selling Price</b></label>
                <input type="text" placeholder="Enter Selling Price" name="selling-price" required />

                <label htmlFor="product-image"><b>Upload Product Images</b></label>
                <input type="file" name="image" id="product-image" required />

                <label htmlFor="product-category"><b>Product Category</b></label>
                <select name="product-category" id="product-category" required>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="miscellaneous">Miscellaneous</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="seller"><b>Your Name</b></label>
                <input type="text" placeholder="Enter Your Name" name="seller" required />

                <label htmlFor="product-location"><b>Product Location</b></label>
                <input type="text" placeholder="Enter Product Location" name="product-location" required />

                <label htmlFor="product-contact"><b>Contact Number</b></label>
                <input type="text" placeholder="Enter Contact Number" name="product-contact" required />

                <button className="sell-button" type="submit">Post</button>
            </form>
        </div>
        <Footer />
        </>
    );
}

export default SellPage;

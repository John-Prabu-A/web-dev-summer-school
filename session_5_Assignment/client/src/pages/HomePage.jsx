import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import Slideshow from '../components/Slideshow';
import ProductListings from '../components/ProductListings';
import Footer from '../components/Footer';

import './HomePage.css';


const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <Header />
            <Banner />
            <SearchBar />
            <Slideshow />
            <div className="container">
                <img src="./img/HP_Shop.png" alt="HP Shop" className="image" />
                <div className="middle">
                    <div className="text" style={{ color: 'green', opacity: '80%' }}>
                        Welcome to InstiOLX, your ultimate destination for buying and selling a wide range of products right within your community. At InstiOLX, we understand the value of convenience and the importance of finding great deals close to home. Whether you're looking for electronics, furniture, vehicles, and even more, our platform connects you with trusted sellers and buyers from your local area. Our user-friendly interface makes it easy to browse listings, post ads, and discover incredible bargains. Join our growing community today and experience a safer, faster, and more enjoyable way to shop.
                    </div>
                </div>
            </div>
            <ProductListings products={products} />
            <Footer />
        </div>
    )
}

export default HomePage
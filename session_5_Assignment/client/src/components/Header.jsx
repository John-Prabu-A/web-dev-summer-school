import React from 'react';

const Header = () => {
    return (
        <header>
            <div id="logo">InstiOLX</div>
            <div className="navbar">
                <span className="nav-link">
                    <a href="/">Home</a>
                    <a href="#">Categories</a>
                    <a href="#">Login</a>
                </span>
                <a href="/sell" style={{ background: 'linear-gradient(45deg, #03442e, #2ECC71, #BDF74B)', textAlign: 'center', borderRadius: '40px' }}>+SELL</a>
            </div>
        </header>
    );
}

export default Header;

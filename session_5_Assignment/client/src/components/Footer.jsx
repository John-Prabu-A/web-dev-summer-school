import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Policies</h3>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Exchange Policy</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <p><i className="fa fa-map-marker"></i> MIT-Campus Anna Univ , Chennai-600044.</p>
                    <p><i className="fa fa-phone"></i> +91 98765 43210</p>
                    <div className="social-icons">
                        <a href="#" className="fa fa-whatsapp"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-facebook"></a>
                    </div>
                </div>
                © Developed by Webops and Blockchain Club, CFI & Edited by JP
            </div>
        </footer>
    );
}

export default Footer;

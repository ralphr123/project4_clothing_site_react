import React from 'react';

// Components
import AboutMe from './AboutMe';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="center full-width relative">   
                <div className="footer center-horizontal baloo-tamma">
                    <div className="footer-group">
                        <span className="footer-title">PRODUCTS</span> <br/>
                        <span className="footer-option">WEBSITE TEMPLATES</span><br/>
                        <span className="footer-option">WEBSITES</span><br/>
                        <span className="footer-option">DOMAINS</span><br/>
                        <span className="footer-option">ONLINE STORES</span><br/>
                        <span className="footer-option">POINT OF SALE</span><br/>
                        <span className="footer-option">EXTENSIONS</span><br/>
                        <span className="footer-option">MARKETING TOOLS</span><br/>
                    </div>
                    <div className="footer-group">
                        <span className="footer-title">CUSTOMERS</span> <br/>
                        <span className="footer-option">FEATURED</span><br/>
                        <span className="footer-option">SMALL BUSINESSES</span><br/>
                        <span className="footer-option">PHOTOGRAPHERS</span><br/>
                        <span className="footer-option">BLOGGERS</span><br/>
                        <span className="footer-option">ARTISTS</span><br/>
                        <span className="footer-option">RESTAURANTS</span><br/>
                        <span className="footer-option">MUSICIANS</span><br/>
                        <span className="footer-option">WEDDINGS</span><br/>
                        <span className="footer-option">STUDENTS</span><br/>
                    </div>
                    <div className="footer-group">
                        <span className="footer-title">COMPANY</span> <br/>
                        <span className="footer-option">ABOUT</span><br/>
                        <span className="footer-option">CAREERS</span><br/>
                        <span className="footer-option">OUR BRAND</span><br/>
                        <span className="footer-option">PRESS & MEDIA</span><br/>
                        <span className="footer-option">NEWSROOM</span><br/>
                        <span className="footer-option">TERMS OF SERVICE</span><br/>
                        <span className="footer-option">PRIVACY POLICY</span><br/>
                        <span className="footer-option">CONTACT US</span><br/>
                        <span className="footer-option">TIMELINE</span><br/>
                    </div>
                    <div className="footer-group">
                        <span className="footer-title">COMMUNITY</span> <br/>
                        <span className="footer-option">HELP & SUPPORT</span><br/>
                        <span className="footer-option">HIRE AN EXPERT</span><br/>
                        <span className="footer-option">FORUM</span><br/>
                        <span className="footer-option">WEBINARS</span><br/>
                        <span className="footer-option">DEVELOPER PLATFORM</span><br/>
                        <span className="footer-option">CIRCLE</span><br/>
                    </div>
                </div>
            </div>
            <div className="total-width center-text">
                <AboutMe marginBottom={30}/>
            </div>
        </div>
    );
}

export default Footer;
import React from 'react';
import logoFooter from '../../assets/images/logo_w.png'; 

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer_logo">
                <img src={logoFooter} alt="logo" />
            </div>
            <p>&copy;2024 by metaplants. <span className="mobile_block">Proudly created with Metaflyer.io</span></p>
        </footer>
    );
}

export default Footer;
import React from 'react';
import { CityLogo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    width="70px"
                    height="70px"
                    //yes it's a link
                    link={true}
                    //where's the link going to go?
                    linkTo="/"
                />
            </div>
                <div className="footer_disclaimer">
                    Manchester City Fan Page
                </div>
            
        </footer>
    );
};

export default Footer;
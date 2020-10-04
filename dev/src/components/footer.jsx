import React from 'react';

import Logo from '../assets/images/praestgarn-logo-hvit.png';
import Insta from '../assets/images/instagram.png';
import Face from '../assets/images/facebook.png';

class Footer extends React.Component {

    render(){
        return(
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-contact">
                        <img id= "logo" src={Logo} alt="præstgar'n logo"/>
                        <p>tlf. 45 27 24 24</p>
                        <a href="mailto:mail@prestgarden.no">mail@prestgarden.no</a>
                        <p>Seegårdsveien 130,</p>
                        <p>2838 Snertingdal</p>
                    </div>
                    <div className="footer-friends">
                        <h4 className="venner-headline">Våre venner i Snertingdal:</h4>
                        <p className="venner">Den blinde ku</p>
                        <p className="venner">Kvernlien mølle</p>
                    </div>
                    <div className="footer-social">
                        <h4>SOSIALE MEDIER</h4>
                        <a target="_blank" href="https://www.facebook.com/snertingdalprestegaard/" rel="noopener noreferrer"><img id="face" src={Face} alt="Facebook logo"/></a>
                        <a target="_blank" href="https://www.instagram.com/praestgarden/?hl=nb" rel="noopener noreferrer"><img id="insta" src={Insta} alt="Instagram logo"/></a>
                    </div>
                    <div className="credits">
                        <h4>Laget av:</h4>
                        <p>Design - gruppe C fra webutvikling, gruppe C og E fra grafisk design</p>
                        <p>Illustrasjoner - gruppe A fra grafisk design</p>
                        <p>Utvikling - gruppe C fra webutvikling</p>
                    </div>
                </div>
            </footer>

        );
    };
}

export default Footer;
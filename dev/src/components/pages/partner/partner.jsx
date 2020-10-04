import React from 'react';
import "./partner.scss";
import BlindeKu from "../../../assets/images/BlindeKu.jpg";
import BukkeneBruse from "../../../assets/images/BukkeneBruse.jpeg";
import KvernlienMølle from "../../../assets/images/KvernlienMølle.jpg";

class Partner extends React.Component {
    
    render(){
        return(
            <div className="container">
                    <div className="partner_content">
                        <h1 className="headline">Våre partnere</h1>
                        <p>Her i Præstgar'n har vi flere venner med bedrifter som vi samarbeider med. De er ofte med på å bidra til arrangementene vi holder på Præstgar'n. Massa sed elementum tempus egestas sed sed. Posuere urna nec tincidunt praesent semper. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.
                        </p>
                        <div className="partner_wrapper">
                            <div className="partner_box">
                                <img src={BlindeKu} alt="" className="partner_img"/>
                                <h2>Den Blinde Ku</h2>
                                <p>
                                    Den Blinde Ku er en bedrift I Gjøvik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </div>
                            <div className="partner_box">
                                <img src={BukkeneBruse} alt="" className="partner_img"/>
                                <h2>Bukkene Bruse</h2>
                                <p>
                                    Den Blinde Ku er en bedrift I Gjøvik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            </div>
                            <div className="partner_box">
                                <img src={KvernlienMølle} alt="" className="partner_img"/>
                                <h2>Kvernlien Mølle</h2>
                                <p>
                                    Den Blinde Ku er en bedrift I Gjøvik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            </div>
                            <div className="partner_box">
                                <img src={BukkeneBruse} alt="" className="partner_img"/>
                                <h2>Bukkene Bruse</h2>
                                <p>
                                    Den Blinde Ku er en bedrift I Gjøvik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            </div>
                            <div className="partner_box">
                                <img src={BlindeKu} alt="" className="partner_img"/>
                                <h2>Den Blinde Ku</h2>
                               <p>
                                    Den Blinde Ku er en bedrift I Gjøvik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            </div>
                            <div className="partner_box">
                                <img src={KvernlienMølle} alt="" className="partner_img"/>
                                <h2>Kvernlien Mølle</h2>
                                <p>
                                    Den Blinde Ku er en bedrift I Gjøvik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            </div>
                        </div>
                    </div>
                </div>
        );
    };
}

export default Partner;
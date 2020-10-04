import React from 'react';
import "./aboutus.scss";

// images
import omosspraest from "../../../assets/images/hans_ola_oestby.jpg";
import HOBimage from "../../../assets/images/HansOlavBrenner.jpg";
import AKimage from "../../../assets/images/AnitaKrohn.jpg";


class AboutUs extends React.Component {

    render() {
        return ( 
            
            <div className="about-us">
                <div className="about-headline">
                    <img src={omosspraest} alt="Præstgar'n tidlig på høsten"></img>
                    <h1>Om oss</h1>
                </div>

                <div className="container">              
                    <div className="about-content">
                        Høsten 2017 kom den 117 år gamle presteboligen i Snertingdal for salg (aka Biri kapellanbolig). Uten å kjenne hverandre, bestemte Hans Olav Brenner og Anita Krohn Traaseth, som begge har dype aner fra Snertingdal, å gå sammen for å bevare gården.
                        
                        Les mer i Aftenposten: Vil gjøre historisk prestegård om til kulturhus 
                        
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut asperiores voluptatem voluptatibus est veniam, odit reprehenderit consequuntur, reiciendis, nam, alias hic odio praesentium nihil consectetur rem iste dignissimos consequatur.
                        
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores et reprehenderit officia. Veniam odio accusamus blanditiis sequi eos! Soluta numquam eum vel debitis molestias earum amet placeat, est perferendis.
                        
                        <h2>Hvem er vi?</h2>
                        <div className="about-wrapper">
                            <div className="aboutBox">
                                <img src={HOBimage} alt="" className="aboutImg"/>
                                <h3>Hans Olav Brenner</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, iure, dignissimos officia id laborum illo placeat dolore quasi deserunt dolorum veniam ipsum quos esse minima ipsa deleniti libero cupidiheadlinetate, voluptate!</p>
                            </div>
                            <div className="aboutBox">
                                <img src={AKimage} alt="" className="aboutImg"/>
                                <h3>Anita Krohn</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis incidunt tempora vel, voluptatem reprehenderit nihil optio eius quia doloribus repellendus quae necessitatibus eaque, consequuntur neque, atque.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>  
            </div>
        );
    };
}

export default AboutUs;

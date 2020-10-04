import React from 'react';
import './rent.scss';
import Hall from '../../../assets/images/rent.jpg';

class Rent extends React.Component {

    render(){
        return(
            <div className="rent">
                <div className="rent-headline">
                    <img src={Hall} alt="Præstgar'n tidlig på høsten"></img>
                    <h1>Utleie</h1>
                </div> 
                
                <div className="rent-container">
                    <div className="rent-info">
                        <h2>Om utleie</h2>
                        <p>Er du på jakt etter et selskapslokale utenom det vanlige? Eller kanskje overnatte i unike omgivelser? 
                        Præstgarn i Snertingdal tilbyr utleie til en rekke selskap, sånn som jubileum, konfirmasjon, bryllup - eller hva enn du måtte ønske!
                        </p>
                        <p>For forespørsel om bestilling, fyll ut skjemaet. Vi kan dessverre ikke garantere plass for alle datoer, men vi sender deg en e-post så raskt som mulig etter vi har mottat etterspørselen.
                        </p>
                        <h3>Priser</h3>
                        <p>Utleie av lokale (én dag):    1500,-</p>
                    </div>


                    <form className="rent-form" action="https://formspree.io/atnguyen@stud.ntnu.no" method="POST">
                        <h3>Forespørsel om utleie</h3>
                            <div className="flex-rent">
                            <label id="name">
                                <h4>Fullt navn*</h4>
                                <input type="text" name="navn"/>
                            </label>
                            <label id="email">
                                <h4>Epost*</h4>
                                <input type="email" name="epost"/>
                            </label>
                            </div>

                            <label>
                                <h4>Type arrangement*</h4>
                                <input type="text" name="arrangement" id="arr"/>
                            </label>

                            <div className="flex-rent">
                            <label>
                                <h4>Fra*</h4>
                                <input type="date" id="fra" name="start-dato"/>
                            </label>
                            <label id="til">
                                <h4>Til*</h4>
                                <input type="date" id="til" name="slutt-dato"/>
                            </label>
                            </div>
                            
                        <input className="send" type="submit" value="Send"/>
                        <p id="oblig">*obligatorisk</p> 

                    </form>
                </div>
            </div>
        );
    };
}

export default Rent;
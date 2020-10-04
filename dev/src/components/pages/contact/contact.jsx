import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import anitaoghans from '../../../assets/images/anitaoghans.jpg';
import './contact.scss';

class Contact extends Component {
    

    render(){

        
        try {
            const contact = this.props.contact;

        return(
            <div className="container">
                <div className="contact">
                    <h1 className="headline">Kontakt</h1>
                    <div className="flex-contact">
                        <div className="info">
                            <p id="tlf">+47 {contact[0].phone}</p>
                            <a href="mailto:mail@prestgarden.no">{contact[0].email}</a>
                            <p>{contact[0].street},</p>
                            <p id="linje2">{contact[0].zip} {contact[0].city}</p>
                        </div>

                        <div className="google-map">
                            <iframe width="100%" height="100%" title="Præstgar'n i Snertingdal" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1941.4529546186056!2d10.462574015673278!3d60.88252568222906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641d5a8d7444d09%3A0x90e3ad1d47f656a1!2sSeeg%C3%A5rdsvegen+130%2C+2838+Snertingdal!5e0!3m2!1sno!2sno!4v1554732281501!5m2!1sno!2sno" allowfullscreen></iframe>
                        </div>
                    </div>

                    <p id="greet">Vi gleder oss til å høre fra deg!</p>
                    <img id= "anitaoghans" src={anitaoghans} alt= "Bilde av Anita og Hans Olav"/>

                </div>
            </div>
        );
        } catch(err) {
            console.log(err);
            return(<div>Loading...</div>)
        }
    };
}

const mapStateToProps = (state) => {

    return {
        contact: state.firestore.ordered.contact
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ {collection: 'contact'} ])
)(Contact);




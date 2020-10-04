import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { updateContact } from '../../../store/actions/contactActions';

class HandleContact extends Component {

    state = {
        phone: '',
        street: '',
        city: '',
        zip: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
        this.props.updateContact(this.state);
    }


    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.phone === nextState) {
            return false;
        } else {
            return true;
        }
    }

    

    render(){


        let test = "";
        if(this.props.auth.uid) {
            test = <p>Loading....</p>;
        } else {
            test = <p>Access denied</p>;
        }

        return(
            <div className="admin-wrapper">
                <h1 className="headline">Endre kontakt informasjon</h1>
                <p className="contact-nb">NB: Alle felter må alltid fylles ut, selv om du bare skal endre på ett felt!</p>
                {this.props.contact && this.props.auth.uid ? 
                    <div>
                        <form autoComplete="off" className="form-wrapper" onSubmit={this.handleSubmit}>
                            <h4>Oppdater kontaktinfo</h4>
                            <div className="input-field">
                                <label htmlFor="tlf">Tlf:</label>
                                <input type="number" id="phone" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="epost">E-post:</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="gate">Gate:</label>
                                <input type="text" id="street" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="postnummer">Postnummer:</label>
                                <input type="number" id="zip" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="by">By:</label>
                                <input type="text" id="city" onChange={this.handleChange} />
                            </div>
                            <div>
                                <button>Publiser</button>
                            </div>
                        </form>
                        <div className="current-contact">
                            <h4>Nåværende kontaktinfo</h4>
                            <p>Tlf: {this.props.contact[0].phone}</p>
                            <p>E-post: {this.props.contact[0].email}</p>
                            <p>Gate: {this.props.contact[0].street}</p>
                            <p>Postnummer: {this.props.contact[0].zip}</p>
                            <p>By: {this.props.contact[0].city}</p>
                        </div>
                    </div>
                : test}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    
    return {
        contact: state.firestore.ordered.contact,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateContact: (contact) => dispatch(updateContact(contact))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([ {collection: 'contact'} ])
)(HandleContact);
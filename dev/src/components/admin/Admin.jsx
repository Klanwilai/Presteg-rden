import React from 'react';
import { connect } from 'react-redux';

import SignIn from '../auth/SignIn';
import EventList from './HandleEvent/EventList';
import CreateEvent from './HandleEvent/CreateEvent';


class Admin extends React.Component {

    render() {
        return(
            <div className="admin-wrapper admin">
                { this.props.auth.uid ? 
                <div>
                    <CreateEvent />
                    <h2 className="existing-event-text">Eksisterende arrangementer:</h2>
                    <EventList />
                </div> : 
                <SignIn /> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Admin);
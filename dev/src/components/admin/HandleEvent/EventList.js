import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import EventSummary from './EventSummary';


class EventList extends Component {
    render() {
        const events = this.props;
        return (
            <div className="create-event-grid">
                {events.events && events.events.map((e, idx) => {
                    return (
                        <Link className="existing-events" key={idx} to={'/program/' + e.id}>
                            <EventSummary  key={idx} title={e.title} description={e.description}/>
                        </Link>
                    )   
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        events: state.firestore.ordered.events
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ {collection: 'events'} ])
)(EventList);
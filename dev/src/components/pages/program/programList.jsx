import React from 'react';


import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';

import ProgramSummary from './programSummary';

const programList = (props) => {
    const program = props.events;
    console.log(program);
    return(
        <div className="events-container">
            {program && program.map((e, idx) => {
                return (
                    <NavLink className="event" key={idx} to={'/program/' + e.id}>
                        <ProgramSummary 
                            key={idx}
                            title={e.title} 
                            date={e.date}
                            time={e.time}
                            price={e.price}
                            url={e.imageURL}
                            />
                    </NavLink>
                )   
            })}
        </div>
    )
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
)(programList);


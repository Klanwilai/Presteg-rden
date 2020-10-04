import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteTimeline } from '../../../store/actions/timelineActions';

const historyEntry = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.deleteTimeline(props.timeline);
    }
    
    return(
        <div className="history-entry">
            <img className="history-image" src={props.url} alt="placeholder text"></img>
            <div className="history-text">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
            {props.auth.uid ? <button onClick={handleClick}>DELETE</button> : null}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.id;
    const timelines = state.firestore.data.timelines;
    const timeline = timelines ? timelines[id] : null;
    return {
        timeline: {...timeline, id: id },
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTimeline: (timeline) => dispatch(deleteTimeline(timeline))
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
       { collection: 'timelines' }
    ])
)(historyEntry);
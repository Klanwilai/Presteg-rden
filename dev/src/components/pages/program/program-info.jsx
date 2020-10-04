import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteEvent } from '../../../store/actions/eventActions';
import { Link } from 'react-router-dom';
// import './program-info.scss';



const programInfo = (props) =>{
    const { event } = props;

    const handleClick = (e) => {
        e.preventDefault();
        props.deleteEvent(event);
    }

    if(event.title) {
        return(
            <div>
                <div className="event-headline">
                    <img src={event.imageURL} alt="placeholder"></img>
                    <h1>{event.title}</h1>
                </div>
                <div className="container">
                    <div className="event-content">
                        <article>
                            <p className="category">Litteratur</p>
                            <h2>{event.title}</h2>
                            <p className="event-description">{event.description}</p>
                        </article>
                        <div className="event-box">
                            <p className="buy-button"><a href={event.ticket} target="_blank" rel="noopener noreferrer">Kjøp billetter</a></p>
                            <ul>
                                <li><span className="bold-font">Dato: </span>{event.date}</li>
                                <li><span className="bold-font">Pris: </span>{event.price}kr</li>
                                <li>Dette arrangementet er gjort i samarbeid med vår venn og samarbeidspartner, Den Blinde Ku. </li>
                                <li><Link to="/partner">Les mer om dem her ></Link></li>
                            </ul>
                        </div>
                    </div>
                    {props.auth.uid ? <button className="delete-event" onClick={handleClick}><Link to={'/admin'}>Slett</Link></button> : null}
                </div>
            </div>
        );
    } else {
        return (<p>loading</p>);
    }
}

const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id;
    const events = state.firestore.data.events;
    const event = events ? events[id] : null;
    return {
        event: {...event, id: id },
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (event) => dispatch(deleteEvent(event))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
       { collection: 'events' }
    ])
)(programInfo);


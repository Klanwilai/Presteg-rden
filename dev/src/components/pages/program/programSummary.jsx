import React from 'react';
import './program.scss';
import './program-info.scss';

const programSummary = (props) => {
    return(
    <div className="event-container">
        <div className="event">
            <img className="event-image" src={props.url} alt="Flowers in Chania"/>
            <div className="ribbon-wrapper">
                <div className="ribbon">Replace text</div>
            </div>
            <div className="event-wrapper">
                <div className="date">
                    <span className="day">{props.date}</span>
                </div>
                
                <div className="event-text">
                    <h2>{props.title}</h2>
                    <div className="event-info">
                        <span className="time">Kl. {props.time}</span>
                        <span className="pris">Pris: {props.price}kr</span>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
}



export default programSummary;
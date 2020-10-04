import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import HistoryEntry from './historyEntry';
import YearList from './yearList';

import './history.scss';

//importing scrollable anchor from https://www.npmjs.com/package/react-scrollable-anchor
import ScrollableAnchor from 'react-scrollable-anchor';

//importing sticky library from https://www.npmjs.com/package/react-sticky-el
import Sticky from 'react-sticky-el';


class History extends Component {

    render(){
        return(
            <div className="container">
                <h1 className="headline">Historie</h1>
                <div className="history-container">
                    <nav className="history-navigation">
                        {/* Makes the side menu stick when it reaches the top of the window */}
                        <Sticky boundaryElement=".block" style = {{position: 'relative'}} hideOnBoundaryHit={false}>

                            <h2>Tidslinje</h2>
 
                            <YearList />

                        </Sticky>
                    </nav>
                    <div className="history-content">
                        {this.props.year && this.props.year.map((e, idx) => {

                            return(
                                <div key={idx}>
                                    <ScrollableAnchor id={e.year}>
                                        <h2 className="year-headline">{e.year}</h2>
                                    </ScrollableAnchor>
                                    {this.props.timeline && this.props.timeline.map((ee, idx) => {
                                        if(e.year === ee.year) {
                                            return(
                                                <HistoryEntry
                                                key={ee.id}
                                                id={ee.id} 
                                                title={ee.title}
                                                content={ee.content}
                                                url={ee.imageURL}/>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    

                </div>
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        timeline: state.firestore.ordered.timelines,
        year: state.firestore.ordered.orderedYears
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ {collection: 'timelines'}, {collection: 'years', orderBy: ['year', 'desc'], storeAs: 'orderedYears'} ])
)(History);
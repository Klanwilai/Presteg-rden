import React from 'react';


import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

//import ProgramSummary from './programSummary';

const yearList = (props) => {
    const year = props.year;
    return(
        <ul>
            {year && year.map((e, idx) => {
                return (
                    <li key={idx}><a href={'#' + e.year} >{e.year}</a></li>
                )   
            })}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        year: state.firestore.ordered.orderedYears
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ {collection: 'years', orderBy: ['year', 'desc'], storeAs: 'orderedYears'} ])
)(yearList);
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { createTimeline, addYear } from '../../../store/actions/timelineActions';

class HandleTimeline extends Component {

    state = {
        year: null,
        title: null,
        content: null,
        image: null,
        addYear: null
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleChangeYear = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleChangeImage = (e) => {
        const file = e.target.files[0];
        this.setState({
            [e.target.id]: file
        });
    }

    handleTimelineSubmit = (e) => {
        e.preventDefault();

        const { addYear, ...timeline } = this.state;
        this.props.createTimeline(timeline);
    }

    handleYearSubmit = (e) => {
        e.preventDefault();

        this.props.addYear(this.state.addYear);
    }
    
    render(){




        return(
            <div className="admin-wrapper">
                <h1 className="headline">Legg til historiske hendelser</h1>
                {this.props.years && this.props.auth.uid ?
                    <div>
                        <form autoComplete="off" className="form-wrapper" onSubmit={this.handleTimelineSubmit}>
                            <div>
                                <h3>Legg til ny historisk hendelse</h3>
                                <div className="input-field">
                                    <label htmlFor="title">Tittel</label>
                                    <input type="text" id="title" onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="content">Innhold</label>
                                    <input type="text" id="content" onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="image">Bilde</label>
                                    <input type="file" id="image" accept="image/*" onChange={this.handleChangeImage} required/>
                                </div>
                            </div>
                            <div className="input-field">
                                <h3>Year</h3>
                                {this.props.years && this.props.years.map((e, idx) => {
                                      
                                    return(
                                        <label className="year-selection" htmlFor="year" key={idx} > 
                                            <input className="year-input" type="radio" name="year" value={e.year} required onChange={this.handleChangeYear}/>
                                            {e.year}
                                        </label>
                                    )
                                })}
                            </div>
                            <div>
                                <button>Publiser</button>
                            </div>
                        </form>
                        <form className="new-year" onSubmit={this.handleYearSubmit} >
                            <label htmlFor="addYear">Legg til årstall: </label>
                            <input type="number" id="addYear" onChange={this.handleChange} required/>
                            <button>Submit</button>
                        </form>
                    </div> 
                    : <div>Access denied </div>}
            </div>
        )
           
    }
}

const mapStateToProps = (state) => {


    return {
        years: state.firestore.ordered.years,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTimeline: (timeline) => dispatch(createTimeline(timeline)),
        addYear: (year) => dispatch((addYear(year)))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([ {collection: 'years'} ])
)(HandleTimeline);


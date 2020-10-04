import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../../store/actions/eventActions';
import './events.scss';

class CreateEvent extends Component {

    state = {
        title: '',
        description: '',
        date: '',
        ticket: '',
        price: '',
        image: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    handleChangeImage = (e) => {
        const file = e.target.files[0];
        this.setState({
            [e.target.id]: file
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createEvent(this.state);
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="row" autoComplete="off" onSubmit={this.handleSubmit}>
                    <h1 className="headline">Lag nytt arrangement</h1>

                    <div className="input-field">
                        <label htmlFor="title">Tittel på arrangement:</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Beskrivelse:</label>
                        <textarea type="text" id="description" onChange={this.handleChange} />
                    </div>
                    <div className="grid-time">
                        <div className="date-time">
                            <label>Dato:</label>
                            <input type="date" id="date" onChange={this.handleChange} />
                        </div>
                        <div className="date-time">
                            <label htmlFor="time">Tid:</label>
                            <input type="time" id="time" onChange={this.handleChange} />
                        </div>       
                    </div>
                    <div className="input-field">
                        <label htmlFor="tickets">Link til billett:</label>
                        <input type="url" id="ticket" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="price">Pris:</label>
                        <input type="number" id="price" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="image">Last opp bilde:</label>
                        <input type="file" id="image" accept="image/*" onChange={this.handleChangeImage} />
                    </div>
                    <div>
                        <button>Publiser</button>
                    </div>
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(CreateEvent);


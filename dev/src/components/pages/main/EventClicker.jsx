import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class EventClicker extends Component {
    constructor(props) {
      super(props);
      this.state = {
        msg: null,
        sliderIndex: 0
      };
    }
    
    clicked(content) {
        this.setState({ sliderIndex: content });
        this.props.triggerhandleClick(content);
      }
  
      
    setSliderIndex(index) {
      this.setState({ sliderIndex: index });
    }

    render() {
      return (
        <ul className="event-click">
          {this.props.content.map((item, content) => (<div key={content}>
            <li onClick={() => this.clicked(content)}
                className={this.state.sliderIndex === content ? "active" : ""}>
                <p>{item.date}</p>
                <h3>{item.title}</h3>
            </li>
            {console.log(content)}
            </div>
          ))}
          <li className="read-more"><NavLink to="/program">Se flere</NavLink></li>
        </ul>
      );
    }
  }

  export default EventClicker;
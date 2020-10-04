import { Component } from 'react';
import { withRouter } from "react-router";

// scrolls to top of the page when new page is rendered 

class GoToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }
  
    render() {
      return this.props.children;
    }
  }

export default withRouter(GoToTop);

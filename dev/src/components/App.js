import React, { Component } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import ReactGA from 'react-ga';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import './scrollTopButton.scss';





class App extends Component {

  reactGA = () => {
    // analystics
    ReactGA.initialize('UA-141250193-1')
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
  // on component mount, add Google Analytics
  componentDidMount() {
      this.reactGA();
  }

  // on component update, reset scroll to top
  componentWillUpdate() {
      this.reactGA();
      // reset scrollbar
      // window.scrollTo(0,0); 
  }

  render() {
    return (
      <div className="App">
        
        <Nav/>
        <ScrollUpButton 
          ContainerClassName="arrow-style"
          ShowAtPosition={300}
        />
        

        <Footer/>
        
      </div>
    );
  }
}

export default App;

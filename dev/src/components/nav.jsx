import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import GoToTop from './GoToTop';

import React, { Component } from 'react';
//Components for routing
import Logo from '../assets/images/praestgarn-logo.png';
import Index from './pages/main/main';
import OmOss from './pages/about/aboutus';
import Galleri from './pages/gallery/gallery';
import Historie from './pages/history/history';
import Partnere from './pages/partner/partner';
import Programmet from './pages/program/program';
import Utleie from './pages/rent/rent';
import Contact from './pages/contact/contact';
import InteractiveMap from './pages/map/map';
import Admin from './admin/Admin';
import ProgramInfo from './pages/program/program-info';
import HandleContact from './admin/HandleContact/HandleContact';
import HandleTimeline from './admin/HandleTimeline/HandleTimeline';

//Nav links
import DefaultNav from './NavLinks/defaultNav';
import SignedInNav from './NavLinks/signedInNav';


class Nav extends Component {
    
    render(){
        return(
            <BrowserRouter>
                <GoToTop>
                    <div className="nav-container">
                        <div id="nav-friends">
                            <p id="friend-text">Våre venner i Snertingdal:  Den Blinde Ku   |   Kvernlien Mølle |   Se flere relaterte sider</p>
                        </div>
                        <nav className="nav-bar">
                            <NavLink to="/"><img className="logo" src={Logo} alt="praestgarn logo"/></NavLink>
                            <input className="menu-btn" type="checkbox" id="menu-btn" />
                            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                            {this.props.auth.uid ? <SignedInNav signOut={this.props.signOut} /> : <DefaultNav />}
                            {/* <ul className="nav-bar">
                                <li><NavLink to="/aboutus">Om oss</NavLink></li>
                                <li><NavLink to="/program">Program</NavLink></li>
                                <li><NavLink to="/history">Historie</NavLink></li>
                                <li><NavLink to="/gallery">Galleri</NavLink></li>
                                <li><NavLink to="/rent">Utleie</NavLink></li>
                                <li><NavLink to="/partner">Partnere</NavLink></li>
                                <li><NavLink to="/contact">Kontakt</NavLink></li>
                                {this.props.auth.uid ? <li><button onClick={this.props.signOut} >Logout</button></li> : null }
                            </ul> */}
                        </nav>
                        <div className="nav-routing">
                            <Route path="/" exact component={Index} />
                            <Route path="/aboutus" exact component={OmOss} />
                            <Route path="/program" exact component={Programmet} />
                            <Route path="/history" exact component={Historie} />
                            <Route path="/gallery" exact component={Galleri} />
                            <Route path="/rent" exact component={Utleie} />
                            <Route path="/partner" exact component={Partnere} />
                            <Route path="/map" exact component={InteractiveMap} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/admin" exact component={Admin} />
                            <Route path="/program/:id" component={ProgramInfo} />
                            <Route path="/handle-contact" exact component={HandleContact} />
                            <Route path="/handle-timeline" exact component={HandleTimeline} />
                        </div>
                    </div>
                </GoToTop>
            </BrowserRouter>

        );
    };
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

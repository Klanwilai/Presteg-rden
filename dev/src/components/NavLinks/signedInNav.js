import React from 'react';
import { NavLink } from 'react-router-dom';

const signedInNav = (props) => {
    return(
        <ul className="menu">
            {/* <li><NavLink to="/aboutus">Om oss</NavLink></li>
            <li><NavLink to="/program">Program</NavLink></li>
            <li><NavLink to="/history">Historie</NavLink></li>
            <li><NavLink to="/gallery">Galleri</NavLink></li>
            <li><NavLink to="/rent">Utleie</NavLink></li> */}
            <li><NavLink to="/handle-timeline">Legg til historie</NavLink></li>
            <li><NavLink to="/history">Slett historie</NavLink></li>
            <li><NavLink to="/handle-contact">Kontakt</NavLink></li>
            <li><NavLink to="/admin">Eventer</NavLink></li>
            <li><button onClick={props.signOut} >Logg ut</button></li>                           
        </ul>
    )
}

export default signedInNav;
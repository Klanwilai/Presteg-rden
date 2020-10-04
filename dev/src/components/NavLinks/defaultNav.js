import React from 'react';
import { NavLink } from 'react-router-dom';

const defaultNav = (props) => {
    return(
        <ul className="menu">
            <li><NavLink to="/aboutus">Om oss</NavLink></li>
            <li><NavLink to="/program">Program</NavLink></li>
            <li><NavLink to="/history">Historie</NavLink></li>
            <li><NavLink to="/gallery">Galleri</NavLink></li>
            <li><NavLink to="/rent">Utleie</NavLink></li>
            <li><NavLink to="/partner">Partnere</NavLink></li>
            <li><NavLink to="/map">Kart</NavLink></li>
            <li><NavLink to="/contact">Kontakt</NavLink></li>                            
        </ul>
    )
}

export default defaultNav;
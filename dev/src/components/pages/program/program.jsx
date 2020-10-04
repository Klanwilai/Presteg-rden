import React, { Component } from 'react';

import ProgramList from './programList'

class Program extends Component {
    
    render(){
        return(
            <div className="container">
                <h1 className="headline">Program</h1>
                <p className="coming">Kommende arrangementer</p>
                <div className="sorting-options">
                    <ul className="view-sorting">
                        <li>Ruter</li>
                        <li>Lister</li>
                    </ul>
                    <ul className="category-sorting">
                        <li>Alle</li>
                        <li>Festival</li>
                        <li>Teater</li>
                        <li>Musikk</li>
                        <li>Mat</li>
                        <li>Film</li>
                        <li>Kunst</li>
                        <li>Litteratur</li>
                        <li>Kultur</li>
                        <li>Komedie</li>
                    </ul>
                </div>

                
                <ProgramList />

                
            </div>
        );
    };
}

export default Program;
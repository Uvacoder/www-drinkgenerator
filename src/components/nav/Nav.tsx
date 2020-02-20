import React, { Component } from 'react';
import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <div className='navBar'>
                <a className="btnNav" href="#section4">about the project</a>
                <a className="btnNav" href="#section3">tech stack</a>
                <a className="btnNav" href="#section2">stats</a>
                {/* <a className="btnNav" href="https://amirk.xyz">back to amirk.xyz</a> */}
            </div>
        )
    }
}

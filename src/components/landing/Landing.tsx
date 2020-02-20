import React, { Component } from 'react';
import './Landing.css';
import { Searchbox } from '../searchbox/Searchbox';
import { Nav } from '../nav/Nav';

export class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div id='section1'>
          <h1 id="heroTitle">Mix. Drink. Repeat.</h1>
          <Searchbox />
        </div>
        <div id='section2'>
          stats
        </div>
        <div id='section3'>
          tech stack
        </div>
        <div id='section4'>
          about
        </div>
        <a href="#section1">
          <button className="up-icon">
            {/* <GoTriangleUp /> */}
            Up!
        </button>
        </a>
      </div>
    )
  }
}
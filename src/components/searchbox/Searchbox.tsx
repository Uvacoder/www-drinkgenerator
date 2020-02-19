import React, { Component } from 'react';
import './Searchbox.css';
import { GoSearch } from "react-icons/go";

export class Searchbox extends Component {
    render() {
        return (
            <div className="search-wrapper active">
                <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search" />
                    <button className="search-icon">
                        <GoSearch />
                    </button>
                </div>
                <div className="result-container">
                </div>
            </div>
        );
    }
}
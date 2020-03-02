import React, { Component } from 'react';
import './Searchbox.css';
import { GoSearch } from "react-icons/go";
import { Service } from '../services/Service';

export class Searchbox extends Component<{}, { is_visible: boolean }> {

    service = new Service();

    constructor(props: any) {
        super(props);
        this.keyPress = this.keyPress.bind(this);
    }

    keyPress(event: any) {
        console.log('event value', event.target.value)
        this.service.CocktailByName(event.target.value);
    }

    render() {
        return (
            <div className="search-wrapper active">
                <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search" ref="SearchBox" onKeyUp={this.keyPress} />
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
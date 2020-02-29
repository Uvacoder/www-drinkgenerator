import React, { Component } from 'react';
import './Searchbox.css';
import { GoSearch } from "react-icons/go";
import { Service } from '../services/Service';

export class Searchbox extends Component<{}, { is_visible: boolean }> {

    service = new Service();

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.service.simpleCall();
    }

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
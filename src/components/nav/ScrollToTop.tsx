import React, { Component } from 'react';
import './ScrollToTop.css';
import { IoMdRocket } from "react-icons/io";

export class ScrollToTop extends Component<{}, { is_visible: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            is_visible: false,
        }
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisible();
        });
    }

    toggleVisible() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            })
        } else {
            this.setState({
                is_visible: false
            })
        }
    }

    render() {
        const { is_visible } = this.state;
        if (is_visible)
            return (
                <a id="scroll-to-top" href="#section1">
                    <button className="up-icon">
                        <IoMdRocket />
                    </button>
                </a>
            );
        else
            return null;
    }
}
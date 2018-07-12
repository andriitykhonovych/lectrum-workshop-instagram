// Core
import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <div className = 'header'>
                <div className = 'layout'>
                    <div>
                        <a />
                    </div>
                    <input placeholder = 'Search' type = 'text' />
                    <nav>
                        <a className = 'explore' />
                        <a className = 'likes' />
                        <a className = 'profile' />
                    </nav>
                </div>
            </div>
        );
    }
};
// Core
import React, { Component } from 'react';

// Component
import Profile from './Profile';
import Photos from './Photos';

export default class Content extends Component {
    render () {
        return (
            <div className = 'content'>
                <Profile />
                <Photos />
            </div>
        );
    }
};
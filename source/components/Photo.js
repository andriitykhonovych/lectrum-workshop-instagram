// Core
import React from 'react';

export default (props) => {
    return !props.secured && <img className = 'photo' src = { props.src } />;
}
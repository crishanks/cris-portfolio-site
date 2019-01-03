import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
    static PropTypes = {};

    render() {
        return (
            <div>
                <h1>Hi Home!</h1>
                <img src={require('../assets/headshot-cris.jpg')} alt="headshot image"/>
            </div>
        );
    }
}
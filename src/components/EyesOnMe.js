// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    handleBlurEvent = () => {
        console.log("Hey! Eyes on me!")
    }

    handleFocusEvent = () => {
        console.log("Good!")
    }

    render() {
        return (
            <button onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}/>
        )
    }
}


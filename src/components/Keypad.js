// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    handleInputPw = () => console.log('Entering password...')

    render() {
        return (
        <div>
            <input onKeyUp={this.handleInputPw} type="password" />
        </div>
        )
    }

}
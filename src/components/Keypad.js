// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {
    render(){
        return <div>
            <input type="password" onKeyUp={this.handleKeyUp}/>
        </div>
    }

    handleKeyUp() {
        return console.log("Entering password...")
    }
}
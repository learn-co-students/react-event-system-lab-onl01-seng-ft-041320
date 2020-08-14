import React, { Component } from 'react';

export default class Keypad extends Component {

  handlekeyUp = () => {
    console.log("Entering password...")
  }

  render () {
    return (
      <input onKeyUp={this.handlekeyUp} type="password" />
    )
  }
}

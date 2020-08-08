// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  pswd = () => { 
    console.log("Entering password...")
  }

  render() {
    return(
      <input type="password" onKeyUp={this.pswd} />
    )
  }
}

export default Keypad;
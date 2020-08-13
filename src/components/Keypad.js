import React from 'react';

class Keypad extends React.Component {
  
    callback = () => {
        console.log('Entering password...')
    }
    
    render() {
        return(
            <div>
            <input type="password" onKeyUp={this.callback}></input>
            </div>
        )
    }

}

export default Keypad;
  
import React from 'react'

export default class Keypad extends React.Component {

    handleKeyUp = (e) => {
        console.log('Entering password...')
    }

    render () {
        return <input onKeyUp={this.handleKeyUp} type='password'/>
    }
}
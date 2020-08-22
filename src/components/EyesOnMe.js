import React from 'react'

export default class EyesOnMe extends React.Component {
    constructor() {
        super()
    }

    printFocus = () => {
        console.log('Good!')
    }

    printBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.printFocus} onBlur={this.printBlur}>Focus/Blur</button>
        )
    }
    
}

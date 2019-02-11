import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { text: 'running together' },
        { text: 'go to Hospital' },
        { text: 'going to impactbyte' }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Learn React</h1>
        <ul>
          {this.state.data.map(item => {
            console.log(item)

            return <li>{item.text}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App

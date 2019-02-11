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
      <div className="App">
        <h1>Learn React</h1>
        <header className="App-header" />
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

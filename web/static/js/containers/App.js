'use strict'

import React, { Component } from 'react'
import Greeting from '../components/Greeting'
// import Login from '../components/Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: "" }
  }

  loadGreeting() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState(data))
      .catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidMount() {
    this.loadGreeting()
  }

  render() {
    return (
      <div>
        <Greeting greeting={this.state.data} />
      </div>
    )
  }
}

export default App

'use strict'

import React, { PropTypes as T, Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import Greeting from './Greeting'
import LoginButton from './LoginButton'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.url = this.props.route.url
    this.auth = this.props.route.auth
    this.state = { data: "" }
  }

  loadGreeting() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => this.setState(data))
      .catch(err => console.error(this.url, err.toString()))
  }

  componentDidMount() {
    this.loadGreeting()
  }

  render() {
    return (
      <div className="root">
        <Greeting greeting={this.state.data} />
        <LoginButton auth={this.auth} />
      </div>
    )
  }
}

export default Login

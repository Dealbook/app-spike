'use strict'

import React, { PropTypes as T, Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

export class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="root">
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home

'use strict'

import React, { Component } from 'react'
import { Router, hashHistory } from 'react-router'
import makeRoutes from '../routes'

const routes = makeRoutes()

class App extends Component {
  constructor(props) {
    super(props)
  }

  /*
   * TODO: switch to browserHistory.
   * How to make the Auth0 callback with the correct URL?
   */
  render() {
    return (
      <Router history={hashHistory}>
        {routes}
      </Router>
    )
  }
}

export default App

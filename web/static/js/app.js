'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import makeRoutes from './routes'

const routes = makeRoutes()

render((
  <Router history={browserHistory}>
    {routes}
  </Router>
), document.getElementById("hello-world"))

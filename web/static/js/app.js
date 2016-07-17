'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import makeRoutes from './routes'

const routes = makeRoutes()

render((
  <Router history={hashHistory}>
    {routes}
  </Router>
), document.getElementById("hello-world"))

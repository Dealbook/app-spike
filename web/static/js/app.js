'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import makeRoutes from './routes'

const url = "https://whispering-shelf-84640.herokuapp.com/api"
const routes = makeRoutes()

render((
  <Router>
    {routes}
  </Router>
), document.getElementById("hello-world"))

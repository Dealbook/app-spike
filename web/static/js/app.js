'use strict'

import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

render(
  <App url="https://whispering-shelf-84640.herokuapp.com/api"/>,
  document.getElementById("hello-world")
)

import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import AuthService from './utils/AuthService'
import Login from './components/Login'
import Home from './components/Home'

const auth = new AuthService("76seOoz7jb5yPXEBwfEyMY0uvm4FV50I", "dealbook.auth0.com")
const url = "https://whispering-shelf-84640.herokuapp.com/api"

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeRoutes = () => {
  return (
    <Route>
      <Route path="/" component={Home} onEnter={requireAuth} auth={auth} />
      <Route path="login" component={Login} auth={auth} url={url} />
      <Route path="access_token=:token" component={Login} auth={auth} url={url} /> //to prevent router errors
    </Route>
  )
}

export default makeRoutes

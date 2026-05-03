import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import AuthService from './utils/AuthService'
import Login from './components/Login'
import Home from './components/Home'

const auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
const apiUrl = "https://whispering-shelf-84640.herokuapp.com/api"

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

/*
 * Routes
 * TODO: remove props duplication for every component
 */
export const makeRoutes = () => {
  return (
    <Route>
      <Route path="/" component={Home} onEnter={requireAuth} auth={auth} />
      <Route path="login" component={Login} auth={auth} url={apiUrl} />
      <Route path="access_token=:token" component={Login} auth={auth} url={apiUrl} /> //to prevent router errors
    </Route>
  )
}

export default makeRoutes

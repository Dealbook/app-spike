import React from 'react'
import { Route, IndexRedirect } from 'react-router'
// import AuthService from 'utils/AuthService'
// import Home from './Home/Home'
import Login from './components/Login'

// const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);
const auth = [];

// // onEnter callback to validate authentication in private routes
// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/login' })
//   }
// }

export const makeRoutes = () => {
  return (
    <Route path="/" component={Login} auth={auth} >
    </Route>
  )
}

export default makeRoutes

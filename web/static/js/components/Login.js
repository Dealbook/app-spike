'use strict'

import React, { PropTypes as T, Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
// import AuthService from '../utils/AuthService'

export class Login extends Component {
  render() {
    // const { auth } = this.props
    return (
      <div className="root">
        <ButtonToolbar className="toolbar">
          <Button bsStyle="primary"
                  // onClick={ auth.login.bind(this) }
                  >Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}
// Login.propTypes = {
//   location: T.object,
//   auth: T.instanceOf(AuthService)
// }

export default Login;

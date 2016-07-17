'use strict'

import React, { PropTypes as T, Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import AuthService from '../utils/AuthService'

export class LoginButton extends Component {
  render() {
    const { auth } = this.props
    return (
      <div className="root">
        <ButtonToolbar className="toolbar">
          <Button bsStyle="primary"
                  onClick={auth.login.bind(this)} >Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}
LoginButton.propTypes = {
  location: T.object,
  auth: T.instanceOf(AuthService)
}

export default LoginButton

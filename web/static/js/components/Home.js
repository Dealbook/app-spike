'use strict'

import React, { PropTypes as T, Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import AuthService from '../utils/AuthService'

export class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.route.auth.getProfile()
    }
    props.route.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout(){
    this.props.route.auth.logout()
    this.context.router.push('/login')
  }

  render() {
    const { profile } = this.state
    return (
      <div className="root">
        <h2>Home</h2>
        <p>Welcome {profile.name}!</p>
        <Button onClick={this.logout.bind(this)}>Logout</Button>
      </div>
    )
  }
}
Home.contextTypes = {
  router: T.object
}
Home.propTypes = {
  auth: T.instanceOf(AuthService)
}

export default Home

import React, { Component } from 'react'
import * as allComponents from './index'
import rolesConfig from '../../config/roles'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allowedRoutes: [],
      redirectRoutes: []
    }
  }

  componentDidMount() {
    let role = this.props.role || 'guest'
    console.log(role)
    if (role) {
      this.setState({
        allowedRoutes: rolesConfig[role].routes,
        redirectRoutes: [rolesConfig[role].redirect]
      })
    }
    // else {
    //   this.props.history.push('/login');
    // }
  }

  render() {
    return (
      <>
        <Switch>
          {this.state.allowedRoutes.map(route =>
            < Route
              key={route.url}
              exact path={route.url}
              component={allComponents[route.component]}
              
            />
          )}
          {this.state.redirectRoutes.map(url =>
            <Redirect to={url} />
          )}
        </Switch>
      </>
    )
  }
}

export default withRouter(PrivateRoute);

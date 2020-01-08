import React, { Component } from 'react'
import * as allComponents from './index'
import rolesConfig from '../../config/roles'
import { Route, withRouter, Redirect, Switch, useParams } from 'react-router-dom';
// import TopicList from '../TopicList'
import Topic from '../../pages/Topic'


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

  // function BlogPost() {
  //   let { slug } = useParams();
  //   return <div>Now showing post {slug}</div>;
  // }
  render() {
    function BlogPost() {
      let { slug } = useParams();
      return <Topic con={slug} />;
    }
    return (
      <>
        <Switch>
          <Route path="/topic/:slug">
            <BlogPost />
          </Route>
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

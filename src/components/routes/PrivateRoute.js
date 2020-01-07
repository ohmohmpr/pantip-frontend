import React, { Component } from 'react'
import * as allRoutes from './index'
import rolesConfig from '../../config/roles'
import { Route, withRouter } from 'react-router-dom'; //, Redirect
// import { Switch } from 'antd';


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
    // console.log([rolesConfig['guest'].redirect])
    // console.log(rolesConfig[role].redirect)
    if (role) {
      this.setState({
        allowedRoutes: rolesConfig[role].routes,
        // redirectRoutes: [rolesConfig[role].redirect]
      })
    } else {
      this.props.history.push('/login');
    }
    // console.log([rolesConfig[role].redirect])
    // console.log(this.state.allowedRoutes)
    // console.log(this.state.redirectRoutes)
  }

  render() {
    return (
      <>
        {this.state.allowedRoutes.map(route =>
        
          // (
            
          //   <Switch>
          //     {if ({route.url} == 'topic')
          //     {

          //     }}
              < Route
                exact path={route.url}
                component={allRoutes[route.component]}
                key={route.url}
              />
          //     <Route path="/blog/:slug">
          //       <BlogPost />
          //     </Route>

          //   </Switch>

          // )
        )}
        {/* {this.state.redirectRoutes.map(url => {
          <Redirect to={url} />
        })} */}
      </>
    )
  }
}

export default withRouter(PrivateRoute);

// function BlogPost() {
//   let { slug } = useParams();
//   return <div>Now showing post {slug}</div>;
// }
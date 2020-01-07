import React from 'react'
import { Switch } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import PrivateRoute from './components/routes/PrivateRoute';

class App extends React.Component {
  render() {
    const role = this.props.user.role
    return (
      <div className="App">
        <div className="App container">
          <Switch>
            <PrivateRoute role={role} />
          </Switch>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App);

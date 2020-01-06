import React from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/authentication/Login'
import Topic from './pages/Topic'
import Forum from './pages/forum'
import SignUp from './pages/SignUp'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/topic" component={Topic} />
          <Route path="/forum" component={Forum} />
          <Route path="/topic/2" component={Topic} />
          <Route path="/SignUp" component={SignUp} />
        </div>
    </div>
  );
}

export default App;

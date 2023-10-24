import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Login from './views/login'
import NotFound from './views/not-found'
import Regis from './views/regis'
import Dash from './views/dash'
import Podcast from './views/podcast'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/login" />
        <Route component={Home} exact path="/"/>
        <Route component={Regis} exact path="/regis"/>
        <Route component={Dash} exact path="/dash"/>
        <Route component={Podcast} exact path="/podcast"/>
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/login/Index'
import Index from './views/index/Index'

import './App.css'

//私有化组件
import PrivateRouter from './components/privsteRouter/index'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact render={() => <Login />} path="/" />
          <PrivateRouter component={Index} path="/index" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

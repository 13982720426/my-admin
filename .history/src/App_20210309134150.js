import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './views/login/Index'
import Index from './views/index/Index'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <HashRouter>
          <Route component={Login} path="/" />
        </HashRouter>
      </>
    )
  }
}

export default App

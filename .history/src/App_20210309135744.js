import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
        <BrowserRouter>
          <Route component={Login} path="/" />
          <Route component={Index} path="/index" />
        </BrowserRouter>
      </>
    )
  }
}

export default App

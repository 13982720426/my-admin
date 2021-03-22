import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/login/Index'
import Index from './views/index/Index'
import { Provider } from 'react-redux'
import Store from './store/Index'

import './App.css'

//私有化组件
import PrivateRouter from './components/privsteRouter/Index'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Switch>
            <Route exact render={() => <Login />} path="/" />
            <PrivateRouter component={Index} path="/index" />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App

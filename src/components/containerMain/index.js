import React from 'react'
import { Switch } from 'react-router-dom'

//组件
import User from '../../views/uesr/index'
import UserAdd from '../../views/uesr/Add'

//私有化组件
import PrivateRouter from '../privsteRouter/index'

class ContainerMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Switch>
        <PrivateRouter exact path="/index/user/list" component={User} />
        <PrivateRouter exact path="/index/user/add" component={UserAdd} />
      </Switch>
    )
  }
}

export default ContainerMain

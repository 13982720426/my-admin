import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  )
}
export default PrivateRouter
import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRouter = ({ componnent: Component, ...rest }) => {
  return (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  )
}
export default PrivateRouter

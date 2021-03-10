import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouter = ({ componnent: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (false ? <Component {...routeProps} /> : 11)}
    />
  )
}
export default PrivateRouter

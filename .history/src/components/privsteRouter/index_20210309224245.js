import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouter = ({ componnent: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        true ? <Component {...routeProps} /> : <Redirect to="/" />
      }
    />
  )
}
export default PrivateRouter

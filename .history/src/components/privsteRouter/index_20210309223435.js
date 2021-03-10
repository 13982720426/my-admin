import React from 'react'
import { Route } from 'react-router'

const RrivateRouter = ({ componnent: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <FadeIn>
          <Component {...routeProps} />
        </FadeIn>
      )}
    />
  )
}
export default RrivateRouter

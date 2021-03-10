import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (true ? <Component {...routeProps} /> : 11)}
    />
  )
}
export default PrivateRouter
// function FadingRoute({ component: Component, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={(routeProps) => (
//           <FadeIn>
//             <Component {...routeProps} />
//           </FadeIn>
//         )}
//       />
//     )
//   }

import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router'

const PublicRoute = ({
  component: Component,
  isLogged,
  ...rest
}) => (
  <Route
    {...rest}
    component={ (props) =>
      !isLogged
      ? (<Component {...props}/>)
      : (<Redirect to="/" />)
    }
  />
)

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
}

export default PublicRoute

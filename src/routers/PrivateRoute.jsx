import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({
  component: Component,
  isLogged,
  ...rest
}) => {

  localStorage.setItem('lastPath', rest.location.pathname + rest.location.search)

  return (
    <Route
      {...rest}
      component={ (props) =>
        isLogged
        ? (<Component {...props}/>)
        : (<Redirect to="/login" />)
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
}

export default PrivateRoute

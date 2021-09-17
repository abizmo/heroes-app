import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import { LOGOUT } from '../../auth/authActionTypes'
import AuthContext from '../../auth/AuthContext'

const NavBar = () => {
  const { user: { username }, dispatch } = useContext(AuthContext)
  const history = useHistory()

  const handleLogout = () => {
    dispatch({
      type: LOGOUT,
    })
    history.replace('/login')
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link
        className="navbar-brand"
        to="/"
      >
        Heroes
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{username}</span>
          <button
            className="nav-item nav-link btn btn-outline-secondary"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
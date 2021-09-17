import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"
import AuthContext from "../auth/AuthContext"

import LoginPage from "../pages/LoginPage"
import HeroesRouter from "./HeroesRouter"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

const AppRouter = () => {
  const { user: { logged }} = useContext(AuthContext)

  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            component={LoginPage}
            isLogged={logged}
            path="/login"
          />
          <PrivateRoute
            component={HeroesRouter}
            isLogged={logged}
            path="/"
          />
        </Switch>
      </>
    </Router>
  )
}

export default AppRouter
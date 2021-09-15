import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import LoginPage from "../pages/LoginPage"
import HeroesRouter from "./HeroesRouter"

const AppRouter = () => (
  <Router>
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HeroesRouter} />
      </Switch>
    </>
  </Router>
)

export default AppRouter
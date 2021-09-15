import React from "react"
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom"

import NavBar from "../components/ui/NavBar"
import DCPage from "../pages/DCPage"
import HeroesPage from "../pages/HeroesPage"
import MarvelPage from "../pages/MarvelPage"

const HeroesRouter = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/dc" component={DCPage} />
      <Route path="/heroes/:heroId" component={HeroesPage} />
      <Route path="/marvel" component={MarvelPage} />
      <Redirect to="/marvel" />
    </Switch>
  </div>
)

export default HeroesRouter
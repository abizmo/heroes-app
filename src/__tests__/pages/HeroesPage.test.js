import { mount } from "enzyme"
import { Route, Router } from "react-router"
import {createMemoryHistory} from 'history'

import HeroesPage from "../../pages/HeroesPage"

describe('HeroesPage tests', () => {
  let history
  beforeEach(() => {
    history = createMemoryHistory({ initialEntries: ["/heroes/marvel-wolverine"]})
  })

  test('should redirect to /marvel if no hero', () => {
    const wrapper = mount(
      <Router history={history}>
        <HeroesPage />
      </Router>
    )
    
    expect(wrapper.find('Redirect').exists()).toBeTruthy()
  })
  
  test('should render and match snapshot', () => {
    const wrapper = mount(
      <Router history={history}>
        <Route path={"/heroes/:heroId"}>
          <HeroesPage />
        </Route>
      </Router>
    )
    
    expect(wrapper.find('h2').text()).toBe("Wolverine")
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should goBack when click back', () => {
    history.push = jest.fn()
    const wrapper = mount(
      <Router history={history}>
        <Route path={"/heroes/:heroId"}>
          <HeroesPage />
        </Route>
      </Router>
    )
    
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
  })
  
  test('should goto /marvel if history.length === 1 when click back', () => {
    const history = createMemoryHistory({ initialEntries: ["/heroes/marvel-wolverine","/marvel"]})
    history.goBack = jest.fn()
    const wrapper = mount(
      <Router history={history}>
        <Route path={"/heroes/:heroId"}>
          <HeroesPage />
        </Route>
      </Router>
    )
    
    wrapper.find('button').simulate('click')
    expect(history.goBack).toHaveBeenCalled()
  })
})

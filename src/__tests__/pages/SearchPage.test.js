import { mount } from 'enzyme'
import { createMemoryHistory } from 'history'
import { act } from 'react-dom/test-utils'
import { Router } from 'react-router'

import SearchPage from '../../pages/SearchPage'

describe('SearchPage tests', () => {
  
  test('should render and match snapshot', () => {
    const history = createMemoryHistory()
    const wrapper = mount(
      <Router history={history}>
        <SearchPage />
      </Router>
    )

    expect(wrapper.find('h4').at(0).text()).toBe('Search')
    expect(wrapper.find('h4').at(1).text()).toBe('Heroes')
    expect(wrapper.find('HeroesList').exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should submit and push in history with "?q=man"', () => {
    const history = createMemoryHistory()
    history.push = jest.fn()
    const evt = {
      preventDefault: () => {},
      target: {
        name: 'search',
        value: 'man',
      }
    }
    const wrapper = mount(
      <Router history={history}>
        <SearchPage />
      </Router>
    )

    wrapper.find('input').simulate('change',evt)
    wrapper.find('form').simulate('submit', evt)
    expect(history.push).toHaveBeenCalledWith('?q=man');
  })
  
  test('should call HeroesList with superhero=man', () => {
    const history = createMemoryHistory({initialEntries: ["/search?q=man"]})
    const wrapper = mount(
      <Router history={history}>
        <SearchPage />
      </Router>
    )

    expect(wrapper.find('HeroesList').prop('superhero')).toBe('man')
    expect(wrapper).toMatchSnapshot()
  })
})

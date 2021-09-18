import { mount } from "enzyme"
import { MemoryRouter } from "react-router"

import PrivateRoute from "../../routers/PrivateRoute"

describe('PrivateRoute tests', () => {
  const props = {
    location: {
      pathname: '/marvel',
      search: '',
    }
  }
  Storage.prototype.setItem = jest.fn()

  test('should render if user is authenticated and set localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          component={() => <span>Test</span>}
          isLogged={true}
          path='/'
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', props.location.pathname)
  })

  test('should not render if user is not authenticated and set localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          component={() => <span>Test</span>}
          isLogged={false}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBeFalsy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', props.location.pathname)
  })
})

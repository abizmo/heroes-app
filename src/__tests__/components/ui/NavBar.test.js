import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import { LOGOUT } from "../../../auth/authActionTypes"
import AuthContext from "../../../auth/AuthContext"
import NavBar from "../../../components/ui/NavBar"

describe('NavBar Tests', () => {
  const user = {
    username: 'goccita',
    logged: true,
  }
  const dispatch = jest.fn()
  const historyMock = {
    createHref: jest.fn(),
    replace: jest.fn(),
    location: {
    },
    listen: jest.fn(),
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  const wrapper = mount(
    <AuthContext.Provider value={{ user, dispatch }}>
      <MemoryRouter>
        <Router history={historyMock}>
          <NavBar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text()).toBe(user.username)
  })
  
  test('should logout', () => {
    wrapper.find('button').simulate('click')

    expect(dispatch).toHaveBeenCalledWith({type: LOGOUT})
    expect(historyMock.replace).toHaveBeenCalledWith('/login')
  })
})

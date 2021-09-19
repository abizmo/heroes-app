import { mount } from "enzyme"
import { createMemoryHistory } from 'history'
import { Router } from "react-router"
import { LOGIN } from "../../auth/authActionTypes"
import AuthContext from "../../auth/AuthContext"
import LoginPage from "../../pages/LoginPage"

Storage.prototype.getItem = jest.fn()

describe('LoginPage tests', () => {
  const dispatch = jest.fn()
  const evt = {
    preventDefault: () => {}
  }

  test('should render and match snapshot', () => {
    const wrapper = mount(
      <AuthContext.Provider value={{ dispatch }}>
        <LoginPage />
      </AuthContext.Provider>
    )

    expect(wrapper.find('button').text()).toBe('Login')
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should make login, call localStorage.getItem, dispatch and history.replace', () => {
    const action = {
      type: LOGIN,
      payload: {
        username: 'Goccita'
      },
    }
    const history = createMemoryHistory()
    history.replace = jest.fn()
    const wrapper = mount(
      <AuthContext.Provider value={{ dispatch }}>
        <Router history={history}>
          <LoginPage />
        </Router>
      </AuthContext.Provider>
    )
    
    wrapper.find('form').prop('onSubmit')(evt)
    expect(dispatch).toHaveBeenCalledWith(action)
    expect(history.replace).toHaveBeenCalled()
    expect(localStorage.getItem).toHaveBeenCalledWith('lastPath')
  })
})

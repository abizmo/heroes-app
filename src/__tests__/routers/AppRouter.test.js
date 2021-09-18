import { mount } from "enzyme"
import AuthContext from "../../auth/AuthContext"
import AppRouter from "../../routers/AppRouter"

describe('AppRouter tests', () => {
  test('should show Login if user is not authenticated', () => {
    const user = { logged: false }

    const wrapper = mount(
      <AuthContext.Provider value={{ user }}>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })
  
  test('should show MarvelPage if user is authenticated', () => {
    const user = { 
      logged: true,
      username: 'goccita'
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ user }}>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('span').text()).toBe(user.username)
  })
})

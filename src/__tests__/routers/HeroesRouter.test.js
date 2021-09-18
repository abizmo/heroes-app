import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import AuthContext from "../../auth/AuthContext"
import HeroesRouter from "../../routers/HeroesRouter"

describe('HeroesRouter tests', () => {
  const user = {
    logged: false,
    username: 'goccita',
  }

  test('should render and match snapshot', () => {
    const wrapper = mount(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter>
          <HeroesRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text()).toBe(user.username)
  })
})

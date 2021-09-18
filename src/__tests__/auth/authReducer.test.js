import { LOGIN, LOGOUT } from "../../auth/authActionTypes"
import authReducer from "../../auth/authReducer"

describe('authReducer Tests', () => {
  test('should return the default state', () => {
    const state = authReducer(undefined, {})

    expect(state).toEqual({})
  })
  
  test('should logged in and return the username', () => {
    const expected = {
      username: 'Charlie',
      logged: true,
    }
    const state = authReducer({}, {
      type: LOGIN,
      payload: { username: expected.username }
    })

    expect(state).toEqual(expected)
  })
  
  test('should logged out and remove the username', () => {
    const expected = { logged: false }
    const initialState = {
      username: 'Charlie',
      logged: true,
    }
    const state = authReducer(initialState, {
      type: LOGOUT,
    })

    expect(state).toEqual(expected)
  })
  
  
})

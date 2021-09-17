import { LOGIN, LOGOUT } from "./authActionTypes"

const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...payload, logged: true }

    case LOGOUT:
      return { logged: false }

    default:
      return state
  }
}

export default authReducer

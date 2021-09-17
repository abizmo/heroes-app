import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { LOGIN } from '../auth/authActionTypes'
import AuthContext from '../auth/AuthContext'

const LoginPage = () => {
  const history = useHistory()
  const { dispatch } = useContext(AuthContext)

  const handleLogin = (evt) => {
    evt.preventDefault();
    dispatch({
      type: LOGIN,
      payload: {
        username: 'Goccita'
      },
    })
    history.replace("/")
  }

  return (
    <div className="login text-center">
      <main className="form-signin">
        <form onSubmit={handleLogin}>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
          >Login</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
    </div>
  )
}

export default LoginPage

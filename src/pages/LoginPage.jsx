import React from 'react'

const LoginPage = ({ history }) => {
  const handleLogin = () => {
    history.replace("/")
  }

  return (
    <div className="login text-center">
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <button
            className="w-100 btn btn-lg btn-primary"
            onClick={handleLogin}
            type="submit"
          >Login</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
    </div>
  )
}

export default LoginPage

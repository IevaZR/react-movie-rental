import React from 'react'
import "./LoginForm.css"

const LoginForm = () => {
  return (
    <form className="LoginPageFormWrapper">
    <label className="LoginPageFormLabel">Email</label>
    <input
      type="email"
      placeholder="email"
      className="LoginPageInput"
      id="loginEmail"
    />
    <p className="LoginPageValidErrMsg" id="LoginPageValidErrMsgEmail">
      Please provide valid email
    </p>
    <label className="LoginPageFormLabel">Password</label>
    <input
      type="password"
      placeholder="password"
      className="LoginPageInput"
      id="loginPassword"
    />
    <p className="LoginPageValidErrMsg" id="LoginPageValidErrMsgPassword">
      Please provide valid password
    </p>
    <p className="LoginPageValidErrMsg" id="LoginUnsuccessful">
      Incorrect email or password
    </p>
    <button
      type="button"
      className="BlackButton Centered"
      onclick="loginUser()"
    >
      Sign in
    </button>
  </form>
  )
}

export default LoginForm
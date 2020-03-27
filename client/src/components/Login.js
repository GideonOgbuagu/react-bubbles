import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

    //console.log(state)
  }
  // make a post request to retrieve a token from the api

  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="login-cont">
          <div className="login-header">
            <h1>Welcome to the Bubble App!</h1>
            <p>Login</p>
          </div>
          <div className="form-cont">
              <form className="form">
                  <input type="text" name="username" value={state.username} onChange={handleChange} placeholder="Enter Username"/>
                  <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter Password"/>
                  <button className="login-button">Login</button>
              </form>
          </div>

    </div>
  );
};

export default Login;

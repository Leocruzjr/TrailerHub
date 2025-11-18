import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='loginLogo' alt='' />
      <div className="loginForm">
         <h1>Sign Up</h1>
         <form>
          <input type='text' placeholder='your name' />
          <input type='email' placeholder='your email' />
          <input type='password' placeholder='Password' />
          <button>Sign Up</button>
          <div className="formHelp">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Stuck?</p>
          </div>
         </form>
      </div>
    </div>
  )
}

export default Login
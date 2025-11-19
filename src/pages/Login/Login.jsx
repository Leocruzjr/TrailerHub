import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  return (
    <div className='login'>
      <img src={logo} className='loginLogo' alt='' />
      <div className="loginForm">
         <h1>{signState}</h1>
         <form>
          {/*If useState equals "sign up"
           then name input field will show, 
           else, will remain empty*/}
          {signState==='Sign Up' ? 
            <input type='text' placeholder='your name' /> :<></>}
          <input type='email' placeholder='your email' />
          <input type='password' placeholder='Password' />
          <button>{signState}</button>
          <div className="formHelp">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Stuck?</p>
          </div>
         </form>
         <div className="formSwitch">
          {signState === 'Sign In' ? 
            <p>New to TrailerHUB? <span onClick={()=>{setSignState('Sign Up')}}>
              Sign Up Now</span>
            </p> 
            : 
            <p>Already have an account? <span onClick={()=>{setSignState('Sign In')}}>
              Sign In Now</span>
            </p>
          }
         </div>
      </div>
    </div>
  )
}

export default Login
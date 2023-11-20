import React, { useState } from 'react'
import './Login.css'

function Login() {
    const[action,setAction]=useState("Log in")
  return (
    <div className='container'>
    <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>
    <div className='inputs'>
        {action === "Log in" ? <div></div>:<div className='input'>
            <img src='./login/person.png' alt='' />
            <input type='text' placeholder='Enter username' />
        </div>}
        
        <div className='input'>
            <img src='./login/email.png' alt='' />
            <input type='email' placeholder='Enter your mail' />
        </div>
        <div className='input'>
            <img src='./login/password.png' alt='' />
            <input type='password' placeholder='Enter password' />
        </div>
    </div>
    <div className='forgotpassword'>Forgot Password <span>Clich here</span> </div>
    <div className='submitcontainer'>
        <div className={action === "Log in" ? "submit gray":"submit "} onClick={()=>{setAction("Sign up")}} >Sign up</div>
        <div className={action === "Sign up" ? "submit gray":"submit "} onClick={()=>{setAction("Log in")}} >Log in</div>
    </div>
</div>
  )
}

export default Login

import React, { useState } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';

export default function Login(){
    const [state, setState] = useState(false)

    const toggleBtn = () =>{
        setState(prevstate => !prevstate)
    }
    
    return(
        <div className='Login'>
            <img src="gleedesignlarge.svg" alt="" className='largeicon'/>
            <div className='logcard'>
                <h2>Log in</h2>
                <div className="log-box">
                    <div className='toplog'>
                        <img src="maillog.svg" alt="" className='maillog'/>
                        <input className="mailbox" type="email" name="" id="" placeholder="Enter your email"/>
                    </div>
                    <div className='botname'>
                        <img src="passlog.svg" alt="" className='passlog'/>
                        <input className="passbox" type={state ? "text":"password"} name="" id="password" placeholder="Password"/>
                        <div className='eyeopen' onClick={toggleBtn}>{state ? <img src="eyeclose.svg" alt=''/>:<img src="eye.svg" alt=""/>}</div>
                    </div>
                    <a href="forgot"><h4>Forgot password?</h4></a>
                    <button className="logbtn" type="button" name="button">Login</button>
                    <hr />
                    <h3>Don't have an account yet? <Link exact to="/Signup">Sign up</Link></h3>
              </div>
            </div>
            <Navbar/>
        </div>
    )
}
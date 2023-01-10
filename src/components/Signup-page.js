import React, { useState } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default function Signup(){
    const [state, setState] = useState(false)

    const toggleBtn = () =>{
        setState(prevstate => !prevstate)
    }
    return(
        <div className='Signup'>
            <img src="gleedesignlarge.svg" alt="" className='largeicon'/>
            <div className='logcard'>
                <h2>Get started!</h2>
                <div className="sign-box">
                    <div className='toplog'>
                        <img src="maillog.svg" alt="" className='maillog'/>
                        <input className="mailbox" type="email" name="" id="" placeholder="Enter your email"/>
                    </div>
                    <div className='botname'>
                        <img src="passlog.svg" alt="" className='passlog'/>
                        <input className="passbox" type={state ? "text":"password"} name="" id="" placeholder="Password"/>
                        <div className='eyeopen' onClick={toggleBtn}>{state ? <img src="eyeclose.svg" alt=''/>:<img src="eye.svg" alt=""/>}</div>
                    </div>
                    <button className="signbtn" type="button" name="button">Next</button>
                    <h4>By signing up, you agree to the <Link>Terms & Conditions</Link></h4>
                    <hr />
                    <h3>Already have an account? <Link exact to="/Login">Log in</Link></h3>
              </div>
            </div>
            <Navbar/>
        </div>
    )
}
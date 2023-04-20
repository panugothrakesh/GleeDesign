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
                    <div className='namebox'>
                        <img src="name.svg" alt="" className='maillog'/>
                        <input className="mailbox" type="name" name="" id="" placeholder="Enter your fullname"/>
                    </div>
                    <div className='contbox'>
                        <img src="Calling.svg" alt="" className='maillog'/>
                        <input className="mailbox" type="number" name="" id="" placeholder="+91 999-888-7777"/>
                    </div>
                    <div className='toplog'>
                        <img src="maillog.svg" alt="" className='maillog'/>
                        <input className="mailbox" type="email" name="" id="" placeholder="Enter your email"/>
                    </div>
                    <div className='botname'>
                        <img src="passlog.svg" alt="" className='passlog'/>
                        <input className="passbox" type={state ? "text":"password"} name="" id="" placeholder="Password"/>
                        <div className='eyeopen' onClick={toggleBtn}>{state ? <img src="eyeclose.svg" alt=''/>:<img src="eye.svg" alt=""/>}</div>
                    </div>
                    <div className='toplog'>
                        <img src="location.svg" alt="" className='maillog'/>
                        <select className='round' required>
                            <option value="" disabled selected hidden>Select your country</option>
                            <option value="1">Afghanistan</option>
                            <option value="2">Albania</option>
                            <option value="3">Algeria</option>
                            <option value="4">Andorra</option>
                            <option value="5">Angola</option>
                            <option value="6">Antigua and Barbuda</option>
                            <option value="7">Argentina</option>

                        </select>
                    </div>
                    <button className="signbtn" type="button" name="button">Sign up</button>
                    <h4>By signing up, you agree to the <Link>Terms & Conditions</Link></h4>
                    <hr />
                    <h3>Already have an account? <Link exact to="/Login">Log in</Link></h3>
              </div>
            </div>
            <Navbar/>
        </div>
    )
}
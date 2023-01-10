import React from 'react'
import {Link} from 'react-router-dom';
import { Link  as Scroll } from 'react-scroll'
import img1 from '../assets/gleeicon.svg';

export default function Navbar(){
    return(
        <nav>
            <Scroll to="Home" spy={true} smooth={true} duration={1000}>
              <Link to="/">
              <div className="logo">
                <img src={img1} alt="" className="icon"/>
              </div>
              </Link>
              </Scroll>
              <div className="menu">
                <ul>
                  <li><Scroll to="membership" smooth={true} spy={true} duration={1000}>Membership</Scroll></li>
                  <li><Scroll to="Deliverables" smooth={true} spy={true} duration={1000}>Deliverables</Scroll></li>
                  <li><Scroll to="Pricing" smooth={true} spy={true} duration={1000}>Pricing</Scroll></li>
                  <li><Scroll to="Services" smooth={true} spy={true} duration={1000}>Services</Scroll></li>
                </ul>
                  
                  {/* <a href="#Membership" className="is-active">Membership</a> */}
                  {/* <a href="#Deliverables" className="is-active">Deliverables</a> */}
                  {/* <a href="#Pricing" className="is-active">Pricing</a> */}
                  {/* <a href="#Services" className="is-active">Services</a> */}
                  
                </div>
                
                <Link to="/login">
                  <div className="login">
                    Login
                  </div>
                </Link>
            </nav>
    )
}
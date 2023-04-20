import React, {Suspense} from "react";
import { lazy } from "react";
import '../App.css';
import { Link  as Scroll } from 'react-scroll'
import typo from '../assets/typologo.svg';
import box1 from '../assets/box1.svg'
import box2 from '../assets/box2.svg'
import box3 from '../assets/box3.svg'
import box4 from '../assets/box4.svg'
import Navbar from "./Navbar";




const Quote = lazy(()=>import("./Quote"))
// const Clients = lazy(()=>import("./clients"));
const Blogs = lazy(()=>import("./blogs.js"))
const Membership = lazy(()=>import('./Membership.js'))
const Deliverables = lazy(()=>import('./Deliverables.js'))
const Pricing = lazy(()=>import('./Pricing.js'))
const Services = lazy(()=>import('./Services.js'))
const Footer = lazy(()=>import('./Footer.js'))

export default function HomePage(){

    return(
        <div className="Home">
          <Navbar/>
            <div className="page1" id="Home">
              {/* <img src={bg1} alt="" className='bg'/> */}
              <img src={typo} alt="Logo" className="typo"/>
              <h1>
              Design studio
              <br/>packed in one grant
              </h1>
              <h3>Design subscription to scale your business.</h3>

            <Scroll to='Pricing' smooth={true} spy={true} duration={1300}><button className="pickplan">
              <div className="upbutt">
              Pick a plan
              </div>
            </button></Scroll>
            
            <div className="wrapper">
              <div className="item"><img src={box1} alt="" /></div>
              <div className="item"><img src={box2} alt="" /></div>
              <div className="item"><img src={box3} alt="" /></div>
              <div className="item"><img src={box4} alt="" /></div>
            </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
            {/* <Clients/> */}
            <Quote/>
            <Blogs/>
            <Membership/>
            <Deliverables/>
            <Pricing/>
            <Services/>
            <Footer/>
            </Suspense>
            </div>
    );
}
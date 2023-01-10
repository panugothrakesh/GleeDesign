import React from "react";
import { Link  as Scroll } from 'react-scroll'

export default function Footer(){
    return(
        <div className='foot'>
          <div className="contus">
            <form action="">
              <div className='boxleft'>
              <h4>Join Newsletter</h4>
              <p>New Design updates straight to your inbox</p>
              </div>
              <div className="email-box">
                <img src="emailicon.svg" alt="" className='icc'/>
                <input className="tbox" type="email" name="" id="" placeholder="Enter your email"/>
                <button className="btn" type="button" name="button">Subscribe</button>
              </div>
            </form>
          </div>
          
          <div className="footer">
            <div className="fopart1">
              <img src="bothicon.svg" alt="" />
              <p>Choose a plan, Request designs<br/>
              and get them delivered.</p>
            </div>
            <div className="fopart2">
              <h5>Resources</h5>
              <ul>
                <Scroll to="membership"><li>Membership</li></Scroll>
                <Scroll to="Deliverables"><li>Deliverables</li></Scroll>
                <Scroll to="Pricing"><li>Pricing</li></Scroll>
                <Scroll to="Services"><li>Services</li></Scroll>
              </ul>
            </div>
            <div className="fopart2">
            <h5>Services</h5>
              <ul>
                <li>Ui/Ux Design</li>
                <li>Brand Identity</li>
                <li>Video Editing</li>
                <li>Micro Design</li>
              </ul>
            </div>
            <div className="fopart4">
            <h5>Contact</h5>
              <ul>
                <li className='li1'><img src="mailolicon.svg" alt="" /><p>gleedesign@gmail.com</p></li>
                <li className='li2'><img src="callolicon.svg" alt="" /><p>+91 9493839696</p></li>
                <li className='li3'><img src="instaicon.svg" alt="" /><img src="behanceicon.svg" alt="" /></li>
              </ul>
            </div>
          </div>
          <hr className='line'/>
          <p className='lastp'>All rights are not yet resereved but wil be soon : )</p>
          </div>
    );
}
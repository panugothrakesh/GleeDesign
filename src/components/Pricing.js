import React from "react";
import { Link } from 'react-router-dom'

export default function Pricing(){
    return(
        <div className="membplan" id="Pricing">
              <h1>Membership plans</h1>
              <div className="pplans">
                  <div className="tag">Best choice</div>
                <div className="monthly">
                  <h4>Monthly</h4>
                  <p>Subscribe monthly and pause or
                    <br/>cancel at any time.</p>
                    <h5>$1099/m</h5>
                  <span className='msub'>Pause or cancel anytime.</span>
                  <br/>
                  <Link to="/login">
                  <button className="gets">
                    <div className="upbutt1">
                      Get started
                    </div>
                  </button></Link>
                  <br/>
                  <h6 className="bookcall"><a href="/">Book a call</a></h6>
                </div>
                <div className='quarter'>
                  <h4>Quarterly</h4>
                  <p>Save $350 per month.
                    <br/>
                  </p>
                  <h5>$749/m</h5>
                  <span className='qsub'>Paid quarterly</span>
                  <br/>
                  <Link to="/login">
                  <button className="gets">
                    <div className="upbutt1">
                      Get started
                    </div>
                  </button></Link>
                  <br/>
                  <h6 className="bookcall"><a href="/">Book a call</a></h6>
                </div>
                <div className='year'>
                  <h4>Yearly</h4>
                  <p>Save $700 per month.</p>
                  <h5>$399/m</h5>
                  <span className='panu'>Paid yearly</span>
                  <Link to="/login">
                  <button className="gets">
                    <div className="upbutt1">
                      Get started
                    </div>
                  </button></Link>
                  <br/>
                  <h6 className="bookcall"><a href="/">Book a call</a></h6>
                </div>

                <div className="vcont"><h4>View contract
                <br/>based services.</h4>
                <p>Not sure to choose a plan?<br/>
                No worries, let’s work on a project untill you figure out.</p>
                <img src="navii.svg" alt="" className="navii"/>
                <Link to="/login">
                <button className="gets1">
                    <div className="upbutt3">
                      Send a quote
                    </div>
                  </button></Link>
                  <br/>
                  <h6 className="bookcall1"><a href="/">Book a call</a></h6>
                </div>
                <div className="wainc"><h3>What's included:</h3>
                  <ul>
                    <li>Unlimited requests</li>
                    <li>Unlimited users</li>
                    <li>Pause or cancel anytime</li>
                  </ul>
                </div>
                <div className="wainc"><h3>What's included:</h3>
                  <ul>
                    <li>Unlimited requests</li>
                    <li>Unlimited brands</li>
                    <li>Unlimited users</li>
                  </ul>
                </div>
                <div className="wainc"><h3>What's included:</h3>
                <ul>
                    <li>Unlimited requests</li>
                    <li>Unlimited brands</li>
                    <li>Unlimited users</li>
                  </ul>
                </div>
              </div>
              <div className="mark">
                <h4>Marketing Service</h4>
                <p>We use new technology to design solutions that scale new client acquisition<br/>
                and retention across the full customer experience.
                </p>
              </div>
            </div>
    );
}
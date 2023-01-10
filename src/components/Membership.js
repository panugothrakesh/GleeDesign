import React from "react";
import { Link  as Scroll } from 'react-scroll'


export default function Membership(){
    return(
        <div className="membership" id="Membership">
              <h1>Why become a member?</h1>
              <h3>We have got all covered for you. Never turn
              <br/>back again for designs.</h3>
              <Scroll to='Pricing' smooth={true} spy={true} duration={1000}>
              <button className="pickplan2">
              <div className="upbutt">
              Pick a plan
              </div>
              <div className="downbutt">
              </div>
            </button></Scroll>
            <div className="testimonial-grid">
              <article className="testimonial">
                <img src="unlimit.svg" alt="" className="iconss"/>
                <h2>Unlimited Requests</h2>
                <p>Add as many as Design requests you’d like,
                <br/>there are no limits..!</p>
              </article>
              <article className="testimonial">
                <img src="fastdel.svg" alt="" className="iconss"/>
                <h2>Fast Delivery</h2>
                <p>Get your designs delivered with in average
                <br/>days from requested.</p>
              </article>
              <article className="testimonial">
                <img src="unique.svg" alt="" className="iconss"/>
                <h2>Unique Designs</h2>
                <p>Designs delivered are simply unqiue and
                <br/>are created for you.</p>
              </article>
              <article className="testimonial">
                <img src="strat.svg" alt="" className="iconss"/>
              <h2>Strategy-driver</h2>
              <p>Each project is started with immersion and
              <br/>discovery phase in depth.</p>
              </article>
              <article className="testimonial">
                <img src="qual.svg" alt="" className="iconss"/>
                <h2>High Quality</h2>
                <p>Great design quality and mighty detailing
                <br/>for your brand.</p>
              </article>
              <article className="testimonial">
                <img src="subs.svg" alt="" className="iconss"/>
                <h2>Flexible Subscription</h2>
                <p>Pause or cancel subscription when no work is left.
                <br/>Pay for what you get!</p>
              </article>
            </div>
            </div>
    );
}
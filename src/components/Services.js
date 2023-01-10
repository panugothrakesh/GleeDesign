import React from "react";

export default function Services(){
    return(
        <div className="contracts" id="Services">
                <h1>Contract based services</h1>
                      <div className="sercards">
                                    <div className="card1">
                                        <img src="biicon.svg" alt=''/>
                                        <div className='niche'>
                                        <h6>01.</h6>
                                        <a href="#Next"><img src="opennext.svg" className="nextarrow" alt=''/></a>
                                        <p className="tit">Brand<br/>Identity.</p>
                                        <hr className="cardline"/>
                                        <p className="card1cont">
                                            Elevate your brand identity design
                                            and we ensure consistency, while
                                            outshing your competators.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="card2">
                                        <img src="uiuxicon.svg" alt=""/>
                                        <div className="niche">
                                        <h6>02.</h6>
                                        <a href="#Next"><img src="opennext.svg" className="nextarrow" alt=''/></a>
                                        <p className="tit">UI / UX<br/>Designing.</p>
                                        <hr className="cardline"/>
                                        <p className="card1cont">
                                            Crafting large & small scale design
                                            solutions for web products and
                                            WOW-websites of any purpose!
                                        </p>
                                        </div>
                                    </div>
                                    <div className="card3">
                                        <img src="videoicon.svg" alt=""/>
                                        <div className="niche">
                                        <h6>03.</h6>
                                        <a href="#Next"><img src="opennext.svg" className="nextarrow" alt=''/></a>
                                        <p className="tit">Video<br/>Editing.</p>
                                        <hr className="cardline"/>
                                        <p className="card1cont">
                                            Let’s edit your raw footage into a
                                            video with a distinctive visual story
                                            telling perception.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="card4">
                                    <img src="webicon.svg" alt=""/>
                                    <div className="niche">
                                    <h6>04.</h6>
                                        <p className="tit">Web / App
                                        <br/>Development.</p>
                                        <hr className="cardline"/>
                                            <div className="card2cont">
                                                Coming soon!
                                            </div>
                                            </div>
                                      </div>
                        </div>
                  </div>
    );
}
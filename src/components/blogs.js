import React from "react";

export default function Blogs(){
    return (
        <div className="Blogs">
              <img src="blogicon.svg" alt="" className="blogicon"/>
              <h1>The Blog Posts</h1>
              <h3>The latest industry news, trends, services,
              <br/>technolgoies and resources.</h3>

              <div className="testimonial-grid-2">
                <artile className="testimonial-2">
                    <img src="post1.png" alt="" className="blogphoto"/>
                    <p>Rakesh Panugoth <span>&#9679;</span> Sun 16 Apr, 2023 </p>
                    <h2>Lorem ipsum dolor sit amet,
                    <br/>consectetur adipiscing elit.</h2>
                    <div className="twoparts">
                        <p className="papa">
                            We have got all covered for you. Never turn
                            <br/> back again for designs.
                        </p>
                        <img src="openarrow.svg" alt="" />
                    </div>
                </artile>

                <artile className="testimonial-2">
                    <img src="post1.png" alt="" className="blogphoto"/>
                    <p>Rakesh Panugoth <span>&#9679;</span> Sun 16 Apr, 2023 </p>
                    <h2>Lorem ipsum dolor sit amet,
                    <br/>consectetur adipiscing elit.</h2>
                    <div className="twoparts">
                        <p className="papa">
                            We have got all covered for you. Never turn
                            <br/> back again for designs.
                        </p>
                        <img src="openarrow.svg" alt="" />
                    </div>
                </artile>

                <artile className="testimonial-2">
                    <img src="post1.png" alt="" className="blogphoto"/>
                    <p>Rakesh Panugoth <span>&#9679;</span> Sun 16 Apr, 2023 </p>
                    <h2>Lorem ipsum dolor sit amet,
                    <br/>consectetur adipiscing elit.</h2>
                    <div className="twoparts">
                        <p className="papa">
                            We have got all covered for you. Never turn
                            <br/> back again for designs.
                        </p>
                        <img src="openarrow.svg" alt="" />
                    </div>
                </artile>
              </div>

              <button className="blogg">
              <div className="but">
              Load More
              </div>
            </button>
            
        </div>
    );
}
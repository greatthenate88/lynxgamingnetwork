import React from 'react';
import lynx from './images/lynx.png';

export const AboutAuthor = (props) => {
    return(
        <div className="about-author">
          <h3>About the Author</h3> 
          <div className="author-info-container">
            <div className="author-img-container">
              <img className="author-img" alt="author-img" src={lynx}/>
            </div>
            <div className="author-info">
              <h4><a href="/streamers">C & N</a></h4>
              <p className="author-blurb">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
    );
}
export default AboutAuthor;
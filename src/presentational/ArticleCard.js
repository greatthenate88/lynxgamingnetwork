import React from 'react';
import styled from 'styled-components';
import artthumbnail from './images/artthumbnail.jpg';

const AC = styled.a`
    width:100%;
    border-radius:2px;
    padding: .1rem;
    margin-left:auto;
    margin-right:auto;
    margin-top:1rem;
  .not-a-wrapper{
    border-style:solid;
    border-width:.1rem;
    border-color:#cecece;
    border-radius:.5rem;
  }
  .UN{
    margin:auto;
  }
  .rating{
    margin:auto;
    font-size:1.2rem;
    font-weight:bold;
    display:block;
    position:relative;
    top:5px;
  }
  img{
    width:100%;
    border-radius:.4rem;
  }

  .title{
    text-align:left;
    padding-left:.5rem;
  }
  .creator{
    text-align:right;
    padding-right:.5rem;
  }
  .not-a-wrapper:hover{
    transform:scale(1.02);
    transition: transform .2s ease-in-out;
  }
`;

export const ArticleCard = (props) => {
    return(
        <AC>
          <div className="not-a-wrapper">
            <div className="UN">
                <a href="/articles"><img alt='asdf' src={artthumbnail}></img></a>
            </div>
            <footer className="SCF">
                <div className="title" >Top 5 Starting 16s: Building for Treasures</div>
                <div className="creator" > 3/4 | by C & N</div>
            </footer>
          </div>
        </AC>
    );
}

export default ArticleCard
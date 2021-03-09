import React from 'react';
import styled from 'styled-components';
import artthumbnail from './images/artthumbnail.jpg';

const AC = styled.a`
    width:100%;
    border-radius:2px;
    padding: .1rem;
    border-color:black;
    margin-left:auto;
    margin-right:auto;
    margin-top:1rem;

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
    border:1px solid #0075b5;
    border-bottom:none;
  }

  footer{
    border-width:1px;
    border-style:solid;
    border-color:#0075b5;
    border-top:none;
    text-align:center;
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
    transform:scale(1.05);
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
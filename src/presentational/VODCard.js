import React from 'react';
import styled from 'styled-components';
import thumbnail from './images/thumbnail.jpg';

const SC = styled.a`
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
  }

  .SCF{
    border-width:1px;
    border-style:solid;
    border-color:#0075b5;
    border-top:none;
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

export const StreamerCard = (props) => {
    return(
        <SC>
          <div className="not-a-wrapper">
            <div className="UN">
                <a href="https://www.youtube.com/" target="_blank" ><img alt='asdf' src={thumbnail}></img></a>
            </div>
            <footer className="SCF">
              <div className="title" >Popping OFF! Kikkoman Soysauce does it again</div> 
              <div className="creator" >3/9 | by Kai K</div>
            </footer>
          </div>
        </SC>
    );
}

export default StreamerCard
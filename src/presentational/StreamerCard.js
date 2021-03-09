import React from 'react';
import styled from 'styled-components';
import thumbnail from './images/thumbnail.jpg';

const SC = styled.div`
    width:100%;
    border-style:dashed;
    border-width:1px;
    border-radius:2px;
    padding: 2px;
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
  }
  footer{
    border-width:1px;
    border-style:solid;
    border-color:#0075b5;
  }
`;

export const StreamerCard = (props) => {
    return(
        <SC>
            <div className="UN">
                <img alt='asdf' src={thumbnail}></img>
            </div>
            <footer>Popping OFF! Kikkoman Soysauce does it again | 3/9 | by Kai K</footer>
        </SC>
    );
}

export default StreamerCard
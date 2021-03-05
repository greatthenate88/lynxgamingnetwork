import React from 'react';
import styled from 'styled-components';

const SC = styled.div`
    width:100%;
    border-style:dashed;
    border-width:1px;
    border-radius:2px;
    border-color:black;
    padding:10px;
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
`;

export const StreamerCard = (props) => {
    return(
        <SC>
            <div className="UN">
                <img  alt='asdf'></img>
            </div>
            <footer>asfd</footer>
        </SC>
    );
}

export default StreamerCard
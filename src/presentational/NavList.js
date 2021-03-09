import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../theme/GlobalStyles';


const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:20;
  position:relative;
  font-size:1.1rem;
  a {
    padding: 1.5rem 0rem 0px 10rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:#6bc7da;
    opacity:.9;
    position: fixed;

    top: 0;
    right: 0;
    height: 100vh;
    width: 175px;
    padding-top: 3.5rem;
    padding-right:1rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const NavList = ({ open }) => {

return (
  
  <div className="NL"><GlobalStyles/>
    <UL open={open}>
      <a href="/articles">Articles</a>
      <a href="/">Streamers</a>
      <a href="/">Live Schedule</a>
      <a href="/SignIn">Join Us!</a>    
    </UL>
  </div>
);
}

export default NavList
import React from 'react';
import styled from 'styled-components';



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
  @media (max-width: 1300px) {
    flex-flow: column nowrap;
    background-color:${({theme}) => theme.colors.formbox.bg};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    opacity:1;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 175px;
    padding-top:4rem;
    padding-right:1rem;
    transition: transform 0.3s ease-in-out;  
    a{
      padding-top:5rem;
      padding-left:.1rem;
      padding-right:.1rem;
    }
  }
`;


const NavList = ({ open }) => {

return (
  
  <div className="NL">
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
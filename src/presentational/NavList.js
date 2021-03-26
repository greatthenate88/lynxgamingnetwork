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
    background-color: ${({theme}) => theme.colors.formbox.bg};
    display: ${({open}) => open ? 'flex' : 'none'};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    opacity:.9;
    position:absolute;
    top: 0;
    right: 0;
    height: 550px;
    width: 175px;
    padding-top:4rem;
    padding-right:1rem;
    transition: transform .5s ease-in-out;
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
      <a href="/createarticle">create article</a>
      <a href="/">Streamers</a>
      <a href="/schedule">Live Schedule</a>
      <a href="/SignIn">Join Us!</a>    
    </UL>
  </div>
);
}

export default NavList
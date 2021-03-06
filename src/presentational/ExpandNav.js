import React, { useState } from 'react';
import styled from 'styled-components';
import NavList from './NavList';


const Expand = styled.div`
  width: 2rem;
  height: 2rem;
  position:absolute;
  top:4rem;
  right:3.4rem;
  z-index: 21;
  display: none;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open, theme }) => open ? theme.colors.link.hover : theme.colors.link.text};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const ExpandNav = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Expand open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Expand>
      <NavList open={open}/>
    </>
  )
}
export default ExpandNav
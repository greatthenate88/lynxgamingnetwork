import React from 'react'
import styled from 'styled-components'
import FooterList from './FooterList';



const CustomFooter = styled.footer`
  width: 100%;
  height: 10rem;
  padding:0px;
  border-top:outset .1vh  #b6dbd4;
  box-shadow:inset 0 1rem 1rem -1.5rem #03c6a3;
  display: flex;
  font-weight:bold;
  color:#006bbf;
  justify-content:center;
`;

export const Footer = (props) => {
    return (

        <CustomFooter>
          <FooterList></FooterList>
        </CustomFooter>

    );
    }
export default Footer;
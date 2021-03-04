import React from 'react'
import styled from 'styled-components'
import FooterList from './FooterList';



const CustomFooter = styled.footer`
  width: 100%;
  height: 100%;
  padding:0px;
  border-top: 2px solid #f1f1f1;
  padding: 0 25px;
  position:fixed;
  display: flex;
  background-image: linear-gradient(235deg, whitesmoke, #6bc7da);
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
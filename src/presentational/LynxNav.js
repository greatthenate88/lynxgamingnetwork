import React, { useState, useEffect } from 'react';
import lynx from './images/lynx.png';
import NavList from './NavList';
import ThemeSelector from '../theme/ThemeSelector';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles';
import {useTheme} from '../theme/useTheme';
import ExpandNav from './ExpandNav';

const Nav = styled.nav`
  width:100%;
  height: 10rem;
  border-bottom:inset .1vh  #b6dbd4;
  box-shadow:inset 0 -1rem 1rem -1.5rem #03c6a3;
  padding: 0 25px;
  display: flex;
  font-weight:bold;
  justify-content: space-between;
  .logo {
    padding: 10px 0;
    transition:transform .25s;
    margin-top:auto;
    margin-bottom:auto;
    margin-left:7rem;
    
}
  .logo:hover{
  transform: scale(1.3);
}

  .NL{
    margin-top:auto;
    margin-bottom:auto;
    margin-right:13%;
  }
`;

const LynxLogo = styled.a`

`;

const LynxNav = () => {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });  
  return (
    <ThemeProvider theme={ selectedTheme }>
		  <GlobalStyles/>  
      <Nav>
        <div className="logo">
          <LynxLogo href='/'>
          <img className="lynx" src={lynx} alt="temp lynx logo" height='103px' width='103px'/>
          </LynxLogo>
        </div>
        <ThemeSelector setter={setSelectedTheme} />
        <ExpandNav/>
      </Nav>
    </ThemeProvider>
  );
}

  
  export default LynxNav
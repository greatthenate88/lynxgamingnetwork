import React, { useState, useEffect } from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import StreamArray from './StreamArray';
import ThemeSelector from '../theme/ThemeSelector';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles';
import {useTheme} from '../theme/useTheme';



const opts = {
      height: '658',
      width: '1080',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

export const Dashboard = (props) => {
    const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);
  
    useEffect(() => {
      setSelectedTheme(theme);
     }, [themeLoaded]);
  
    // 4: Load all the fonts
    useEffect(() => {
      WebFont.load({
        google: {
          families: getFonts()
        }
      });
    });
    return (    
      themeLoaded && 
       <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>  
        <Container fluid={true}>
            <Row>
            <Col md="auto">
                <YouTube
                    videoId="Nvxwf1jxdaM"
                    opts={opts}
                    className="main-stream"
                />
            </Col>
            <Col>
                <StreamArray></StreamArray>
            </Col>
            </Row>

            <Row>

            </Row>
        </Container>
       </ThemeProvider>
  );
}

export default Dashboard;
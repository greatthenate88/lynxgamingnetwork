import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import StreamTable from './StreamTable.js';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';



const opts = {
      height: '658',
      width: '1080',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

export const Dashboard = (props) => {

    return (    
  
        <Container fluid={true}>
            <Row>
            <Col md="auto">
                <TwitchEmbed
                    channel="lynxgamingnetwork"
                    id="lynxgamingnetwork"
                    theme="dark"
                    muted
                    height="658px"
                    width="1080px"
                    onVideoPause={() => console.log(':(')}
                />
            </Col>
            <Col>
                <StreamTable></StreamTable>
            </Col>
            </Row>

            <Row>

            </Row>
        </Container>
  );
}

export default Dashboard;
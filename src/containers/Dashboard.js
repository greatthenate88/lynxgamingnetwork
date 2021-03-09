import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import StreamTable from './StreamTable.js';



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
                <YouTube
                    videoId="Nvxwf1jxdaM"
                    opts={opts}
                    className="main-stream"
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
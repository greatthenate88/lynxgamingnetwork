
import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';
import StreamerCard from '../presentational/StreamerCard';

const opts = {
      height: '658',
      width: '1080',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

export const Dashboard = (props) => {

    return (    
        <Container fluid={true}>
            <Row>
            <Col>
                <YouTube
                    videoId="Nvxwf1jxdaM"
                    opts={opts}
                    className="YT"
                />
            </Col>
            <Col>
                <StreamerCard/>
                <StreamerCard/>
                <StreamerCard/>
                <StreamerCard/>
            </Col>
            </Row>
            <Row></Row>
        </Container>
  );
}

export default Dashboard;
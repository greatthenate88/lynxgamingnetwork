import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import StreamerCard from '../presentational/StreamerCard.js';
import styled from 'styled-components';

const Wrapping = styled.div`
    .container{
        margin-top:1rem;
    }
    .row{
        margin-top:-1rem;
        margin-bottom:-1rem;
    }
`;

export const StreamTable = (props) => {
    return (
      <Wrapping>
        <Container>
            <Row noGutters='true'>
                <Col><StreamerCard/></Col>
                <Col><StreamerCard/></Col>
                <Col><StreamerCard/></Col>
            </Row>
            <Row noGutters='true'>
                <Col><StreamerCard/></Col>
                <Col><StreamerCard/></Col>
                <Col><StreamerCard/></Col>
            </Row>
        </Container>
      </Wrapping>
    );
}
export default StreamTable
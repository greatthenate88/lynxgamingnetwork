import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import StreamerCard from '../presentational/StreamerCard.js';
import styled from 'styled-components';
import ArticleCard from '../presentational/ArticleCard.js';

const Wrapping = styled.div`
    .container{
        margin-top:1rem;
    }
    .row{
        margin-top:1rem;
        margin-bottom:-1rem;
    }
    .col{
        margin-left:.2rem;
        margin-right:.2rem;
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
                <Col><ArticleCard/></Col>
                <Col><ArticleCard/></Col>
                <Col><ArticleCard/></Col>
            </Row>
        </Container>
      </Wrapping>
    );
}
export default StreamTable
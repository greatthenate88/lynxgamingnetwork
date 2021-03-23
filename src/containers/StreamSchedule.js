import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import 'react-calendar/dist/Calendar.css';

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

export const StreamSchedule = (props) => {
    return (
        <Wrapping>
        <Container>
            <Row>
                <Col>


                </Col>
            </Row>
        </Container>
        </Wrapping>
    );
}
export default StreamSchedule
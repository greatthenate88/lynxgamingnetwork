import React from 'react';
import {Card} from 'react-bootstrap';
import thumbnail from './images/thumbnail.jpg';


export const StreamerCard = (props) => {
    return(
    <Card bsPrefix="streamer-profile-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" alt="streamer-img" src={thumbnail}>
        </Card.Img>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <p className="author-blurb">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Card.Body>
    </Card>

    );
}

export default StreamerCard
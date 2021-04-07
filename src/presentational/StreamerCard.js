import React from 'react';
import {Card} from 'react-bootstrap';
import thumbnail from './images/thumbnail.jpg';


export const StreamerCard = (props) => {
    return(
    <Card bsPrefix="streamer-profile-card">
        <Card.Img variant="top" alt="streamer-img" src={thumbnail}>
        </Card.Img>
        <Card.Body>
            <Card.Title><a className="streamer-link" href="/streamers">Streamer Name</a></Card.Title>
            <p className="author-blurb">This is what the streamer does/what their twitch or yt profile description is</p>
        </Card.Body>
    </Card>

    );
}

export default StreamerCard
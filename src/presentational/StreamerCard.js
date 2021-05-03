import React from 'react';
import {Card} from 'react-bootstrap';
import fu from './images/fu.jpg';


export const StreamerCard = (props) => {
    return(
    <Card bsPrefix="streamer-profile-card">
        <img className="streamer-card-image" variant="top" alt="streamer-img" src={fu}>
        </img>
        <Card.Body>
            <Card.Title><a className="streamer-link" href="/streamers">Streamer Name</a></Card.Title>
            <p className="author-blurb">This is what the streamer does/what their twitch or yt profile description is</p>
        </Card.Body>
    </Card>

    );
}

export default StreamerCard
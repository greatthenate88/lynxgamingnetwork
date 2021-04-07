import React from 'react';
import YouTube from 'react-youtube';

export const InArtVideo = () => {
    return(
        
        <iframe 
        width="1080"
        height="650"
        //plays most recently uploaded video of a channel
        src="https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=windupzenmofo"
        frameborder="0" 
        allowfullscreen
        autoplay="1">
        </iframe>

    );

}

export default InArtVideo
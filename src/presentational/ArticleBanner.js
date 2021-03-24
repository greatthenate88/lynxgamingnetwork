import React from 'react';
import styled from 'styled-components';
import cardbanner from './images/cardbanner.png';


export const ArticleBanner = (props) => {
    return(

        <div className="tri-img-band">
            <img className="in-art-img" alt="banner" height="300px" src={cardbanner}/>
        </div>

    );
}

export default ArticleBanner
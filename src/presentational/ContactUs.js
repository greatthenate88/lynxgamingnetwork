import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faTwitch, faYoutube, faDiscord, faInstagram} from '@fortawesome/free-brands-svg-icons'




const DropdownContainer = styled.div`
    color:black;
    padding-top:15px;

a{
    padding:15px;
    z-index:10;
}

  .dropdown{
  position: relative;
  display: inline-block;
}
.dropdown-content{
    z-index:5;
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    position: absolute;
    margin-left:-3.6rem;
}
a:hover{
    transform:scale(1.2);
    transition: transform .2s;
}
`;



export const ContactUs = (props) => {
    
return (
    <DropdownContainer>
        <p>Follow Us!</p>
        <div className="dropdown-content">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faTwitter}/></a>
            <a href="https://discord.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faDiscord}/></a>
            <a href="https://www.twitch.tv/lynxgamingnetwork/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faTwitch}/></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faYoutube}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faInstagram}/></a>
        </div>
    </DropdownContainer>
    );
}
export default ContactUs;
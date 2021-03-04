import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faTwitch, faYoutube, faDiscord, faInstagram} from '@fortawesome/free-brands-svg-icons'


const DropdownContainer = styled.div`
    color:black;
    padding-left: 130px;
    padding-right:130px;
    padding-top:15px;
    &:hover {
        color:darkslategray;
    }
a{
    padding:5px;
    z-index:10;
    color:black;
}
  .dropdown{
  position: relative;
  display: inline-block;

}
.dropdown-content{

    z-index:5;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    transition:transform .2s;
}
a:hover{
    transform:scale(1.2);
    color:darkslategray;
}
.dropdown:hover .dropdown-content {
  display: inline-flex;
  color:darkslategray;
}
`;



export const ContactUs = (props) => {
    return (
    <div>
        <DropdownContainer>
    <div className="dropdown">
        <p>Contact Us</p>
        <div className="dropdown-content">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faTwitter}/></a>
            <a href="https://discord.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faDiscord}/></a>
            <a href="https://www.twitch.tv/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faTwitch}/></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faYoutube}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="2x" icon={faInstagram}/></a>
        </div>
    </div>
        </DropdownContainer>
    </div>
    );
    }
export default ContactUs;
import React, {useState}  from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



const SignInThing = styled.div`
    border-style:solid;
    border-color:lightgrey;
    border-width:1px;
    border-radius:7px;
    box-shadow:1px 1px 5px #efffff;
    height:100%;
    width:85%;
    padding:20px;
    display:inline-block;
    margin:auto;
    h1{
        margin-bottom:10px;
        text-overflow:ellipsis;
        overflow:hidden;
        padding:2px;
    }
    .FormBox1 {
        background-color:#feffff;
        margin:1px 25px;
        border-radius:5px;
        border-style:solid;
        border-width:2px;
        height:3rem;
        width:75%;
    }
    .FormButton1 {
        justify-content:center;
        border-radius:5px;
        border-color:lightgrey;
        border-width:1px;
        border-style:solid;
        box-shadow:1px 1px 5px #efffff;
        font-size:20px;
        background-color:#feffff;
        margin-top:15px;
    }
    .FormBox1:focus{
        border-color:#82b7f8;
        border-width:1px;
        border-radius:5px;
        box-shadow:inset 0px 2px 4px rgba(0, 0, 0, 0.2);
        outline:none;
    }
    .FormBox1:invalid{
        border-color:#ff3f51;
        border-width:1px;
        border-radius:2px;
        color:#ff3f51;
    }
    .reveal{
        all:initial;
        background-color:transparent;
        color:black;
        opacity:.8;
        position:static;
        margin-right:-17px;
    }
    .reveal:hover{
        opacity:1;
    }
    .SI {
        color:black;
    }
`;
function revealPass() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

    var count=1;
    function setColor(btn, color) {
    var property = document.getElementById(btn);
    if (count === 0) {
        property.style.color = "black"
        count = 1;        
    }
    else {
        property.style.color = "#005e74"
        count = 0;
    }
}

export const SignInBox = (props) => {
        
return (
        <SignInThing>
            <h1>Sign In</h1>           
                <br/>
            <input placeholder="Username" className='FormBox1' type='text'/>
                <br/>
            <input placeholder="Password" className='FormBox1' type='password' id="myInput"/>
            <div id="PWView" className="reveal"  onClick={()=> setColor('PWView', '#005e74')}>
                <FontAwesomeIcon onClick={() => revealPass()} icon={faEye}/>
            </div>
                <br/>
            <button className='FormButton1'><a href="/profile" className="SI">Sign In!</a></button>
        </SignInThing>
  );
}
export default SignInBox;
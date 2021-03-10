import React, {useState}  from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const SignUpThing = styled.div`
    border-style:solid;
    border-color:lightgrey;
    border-width:1px;
    border-radius:7px;
    box-shadow:0 0 .2rem #03c6a3;
    height:100%;
    width:85%;
    padding:20px;
    display:inline-block;
    margin:auto;
    h1{
        margin-bottom:10px;
        text-overflow:ellipsis;
        overflow:hidden;
    }

`;



function myReveal() {
    var x = document.getElementById("myNewPW");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

    var count=1;
    function setColor(rev, color) {
    var property = document.getElementById(rev);
    if (count === 0) {
        property.style.color = "#005b4a"
        count = 1;        
    }
    else {
        property.style.color = "#03c6a3"
        count = 0;
    }
}
export const SignUpBox = (props) => {

return (

        <SignUpThing>
            <h1>Create an Account</h1>           
            <input placeholder="E-Mail" className='FormBox1' type='text'/>
                <br/>
            <input placeholder="Username" className='FormBox1' type='text'/>
                <br/>
            <input placeholder="Password" className='FormBox1' type='password' id="myNewPW"/>
            <div id="NewPWView" className="reveal"  onClick={()=> setColor('NewPWView', '#03c6a3')}>
                <FontAwesomeIcon onClick={() => myReveal()} icon={faEye}/>
            </div>
                <br/>
            <button className='FormButton1'><a href="/" className="SI">Create Account!</a></button>
        </SignUpThing>

  );
}
export default SignUpBox;
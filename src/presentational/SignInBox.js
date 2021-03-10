import React, {useState}  from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



const SignInThing = styled.div`
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
        padding:2px;
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

export const SignInBox = (props) => {
    const [count, setCount] = useState(0);
return (
        <SignInThing>
            <h1>Sign In</h1>           
                <br/>
            <input placeholder="Username" className='FormBox1' type='text'/>
                <br/>
            <input placeholder="Password" className='FormBox1' type='password' id="myInput"/>
            <div id="PWView" className="reveal"  onClick={()=> setColor('PWView', '#03c6a3')}>
                <FontAwesomeIcon onClick={() => revealPass()} icon={faEye}/>
            </div>
                <br/>
            <button className='FormButton1'><a href="/" className="SI">Sign In!</a></button>
        </SignInThing>
  );
}
export default SignInBox;
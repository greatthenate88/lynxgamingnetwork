import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LynxNav from '../presentational/LynxNav.js';
import Footer from '../presentational/Footer.js';
import AllStreamers from '../containers/AllStreamers.js';





export default function Schedule (props) {
  return (
<>
    <LynxNav></LynxNav>
      <br/>
      <br/>
      <br/>
      <AllStreamers/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Footer></Footer>
</>
  );
}
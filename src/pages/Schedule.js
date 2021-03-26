import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LynxNav from '../presentational/LynxNav.js';
import Footer from '../presentational/Footer.js';
import StreamSchedule from '../containers/StreamSchedule.js';





export default function Schedule (props) {
  return (
<>
    <LynxNav></LynxNav>
      <br/>
      <br/>
      <br/>
      <StreamSchedule/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Footer></Footer>
</>
  );
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LynxNav from '../presentational/LynxNav.js';
import Footer from '../presentational/Footer.js';
import Dashboard from '../containers/Dashboard.js';





export default function Home(props) {
  return (
<>
    <LynxNav></LynxNav>
      <br/>
      <br/>
      <Dashboard></Dashboard>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Footer></Footer>
</>
  );
}
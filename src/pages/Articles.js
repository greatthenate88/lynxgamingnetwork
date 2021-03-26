import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LynxNav from '../presentational/LynxNav.js';
import Footer from '../presentational/Footer.js';
import ArticleHub from '../containers/ArticleHub.js';


export default function Articles(props) {
  return (
<>
    <LynxNav/>
      <ArticleHub/>
    <Footer/>
</>
  );
}
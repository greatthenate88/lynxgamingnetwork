import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LynxNav from '../presentational/LynxNav.js';
import Footer from '../presentational/Footer.js';
import ArticleHub from '../containers/ArticleHub.js';
import ArticleCreator from '../containers/ArticleCreator.js';


export default function Articles(props) {
  return (
<>
    <LynxNav/>
      <ArticleCreator/>
    <Footer/>
</>
  );
}
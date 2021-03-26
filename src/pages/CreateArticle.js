import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LynxNav from '../presentational/LynxNav.js';
import Footer from '../presentational/Footer.js';
import ArticleHub from '../containers/ArticleHub.js';
import { Col } from 'react-bootstrap';
import useStickyState from '../hooks/useStickyState'
import { ArticleMaker } from '../containers/ArticleMaker.js';
import { CreateArticlePreview } from '../containers/CreateArticlePreview';


export default function CreateArticle (props) {

  const [articleMakerData, setArticleMakerData]= useState([]);

 const articleMakerCallback = (data) => {
      // do something with value in parent component, like save to state
      setArticleMakerData(data);
      console.log(data);
  }





  return (
<>
    <LynxNav/>
    <Col>
    <ArticleMaker articleMakerDataCallback = {setArticleMakerData}/>
    </Col>
    <Col>
  <CreateArticlePreview></CreateArticlePreview>
    </Col>
    <Footer/>
</>
  );
}
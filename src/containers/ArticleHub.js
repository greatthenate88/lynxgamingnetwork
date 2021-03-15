import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ArticleCard from '../presentational/ArticleCard';


export const ArticleHub = (props) => {
    return(
    <Container bsPrefix='AH'>
        <br/>
        <Row>
            <Col xs sm md lg xl="9">
                <div className="active-article">
                    <div className="article-header">
                      <h1>Top 5 Starting 16s: Building for Treasures
                        <p>BY C & N | 3/4/2021</p>
                      </h1>
                    <p className="article-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <br/>
                    <div className="about-author">
                      <h3>About the Author</h3>
                      <img alt="contributorimg"></img>
                      <div><h4>C & N</h4><p>about the author/contributor</p></div>
                    </div>
                </div>
                <div className="comment-section">

                </div>
            </Col>
            <Col xs sm md lg xl="2">
                <div className="article-sidebar">
                    <ArticleCard/>
                    <ArticleCard/>
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default ArticleHub;
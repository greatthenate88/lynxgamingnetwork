import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ActiveArticle from '../presentational/ActiveArticle';
import ArticleCard from '../presentational/ArticleCard';
import StreamerCard from '../presentational/StreamerCard';


export const CreateArticlePreview = (props) => {
    return(
    <Container bsPrefix='AH'>
        <br/>
        <Row>
            <Col xs sm md lg xl="9">
                <ActiveArticle/>
                <div className="comment-section">

                </div>
            </Col>
            <Col xs sm md lg xl="2">
                <div className="article-sidebar">
                    <ArticleCard/>
                    <br/>
                    <StreamerCard/>
                </div>
            </Col>
        </Row>
    </Container>
    );
}
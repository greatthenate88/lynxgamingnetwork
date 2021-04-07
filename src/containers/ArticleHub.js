import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ActiveArticle from '../presentational/ActiveArticle';
import ArticleCard from '../presentational/ArticleCard';
import VODCard from '../presentational/VODCard';


export const ArticleHub = (props) => {
    return(
    <Container bsPrefix='AH'>
        <br/>
        <Row>
            <Col xs sm md lg xl="8">
                
                <ActiveArticle/>
                <div className="comment-section">

                </div>
            </Col>
            <Col xs sm md lg xl="2">
                <div className="article-sidebar">
                    <ArticleCard/>
                    <br/>
                    <VODCard/>
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default ArticleHub;
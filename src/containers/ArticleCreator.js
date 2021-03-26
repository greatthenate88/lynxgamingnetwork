import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ActiveArticle from '../presentational/ActiveArticle';
import ArticleSkeleton from './ArticleSkeleton';


export const ArticleCreator = (props) => {
    return(
    <Container bsPrefix='AH'>
        <br/>
        <Row>
            <Col xs sm md lg xl="6">
                <div className="article-preview">
                    <ActiveArticle/>
                </div>
            </Col>
            <Col xs sm md lg xl="6">
                <ArticleSkeleton/>
            </Col>
        </Row>
    </Container>
    );
}

export default ArticleCreator;
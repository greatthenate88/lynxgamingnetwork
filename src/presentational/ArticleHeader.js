import React from 'react';
import styled from 'styled-components';
import ArticleBanner from './ArticleBanner';



export const ArticleHeader = (props) => {
    return(
        <div>
          <h1>Top 5 Starting 16s: Building for Treasures</h1>
          <p className="credit-date">BY <a href="/streamers">C & N</a> | 3/18/2021</p>
          <ArticleBanner/>
        </div>
    );
}
export default ArticleHeader;
import React from 'react';
import styled from 'styled-components';

const ArtHead = styled.div`
    .credit-date{

    }
`;


export const ArticleHeader = (props) => {
    return(
        <ArtHead>
          <h1>Top 5 Starting 16s: Building for Treasures</h1>
          <p className="credit-date">BY <a href="/streamers">C & N</a> | 3/18/2021</p>
        </ArtHead>
    );
}
export default ArticleHeader;
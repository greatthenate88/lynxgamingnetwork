import React from 'react';
import ByLine from '../presentational/ByLine';



export const ArticleSkeleton = () => {
    return(
        <div className="article-skeleton">
            <div className="heading">
                <h1>Title</h1>
                <ByLine/>
                <img alt="optional-banner"/>
            </div>
            <div className="content">
                <h3>List Item Title (optional)</h3>
                <p>Body</p>                
                <img alt="optional-img"/>
            </div>
            <button>add h1</button>
            <br/>
            
            <br/>
            <button>add div</button>
            <br/>
            <button>add img</button>
            <br/>
        </div>
    );
}

export default ArticleSkeleton
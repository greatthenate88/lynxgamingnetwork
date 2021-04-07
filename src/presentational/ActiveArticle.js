import React from 'react';
import wrathscalenaga from './images/wrathscalenaga.png';
import altruis from './images/altruis.png';
import skullofguldan from './images/skullofguldan.png';
import AboutAuthor from './AboutAuthor';
import ArticleHeader from './ArticleHeader';
import ListicleItem from './ListicleItem';
import { InArtVideo } from './InArtVideo';


export const ActiveArticle = (props) => {
    return(
    <>
    <div className="active-article">
        <ArticleHeader/>
         <div className="article-body">
             <InArtVideo/>
            <ListicleItem/>
            <h3>
                1. Demon Hunter - Illidari Strike    
            </h3>
            <div className="article-banner">
                <img className="in-art-img" alt="hscard1" height="300px" src={wrathscalenaga}/>
                <img className="in-art-img" alt="hscard2" height="300px" src={altruis}/>
                <img className="in-art-img" alt="hscard3" height="300px" src={skullofguldan}/>
            </div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            <br/>
            <br/>
            <br/>
        </div>
        <br/>
        <AboutAuthor/>
        <br/>
    </div>
    <br/>
    </>
    );
}
export default ActiveArticle;
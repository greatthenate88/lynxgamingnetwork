import { createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all .1s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
  a:hover{
    color: ${({ theme }) => theme.colors.link.hover};
    transform:scale(1.05);
  }
  .SCF{
    background-color: ${({theme}) => theme.colors.foot.bc};
  }
  p{
    color: ${({ theme }) => theme.colors.link.text};
    font-size:1.1rem;
  }
  h4{
    padding-top:.8rem;
  }
  .in-art-img{
    float:inline-start;
  }
  .active-article{
    border-right:1px solid lightgrey;
    width:75%;
    margin:auto;
  }
  .article-body{
    text-align:justify;
    padding-right:15%;
    padding-left:15%;
  }
  .about-author{
    width:25%;
    margin-left:10rem;
  }
  .article-banner{
    margin-bottom:1rem;
    width:100%;
    margin-left:auto;
    align-content:center;
  }
  .article-sidebar{
    padding:10px;
    position:relative;
    right:10vh;
  }
  .author-img{
    border-radius:50%;
    height:3rem;
    margin-right:1rem;
  }
  .author-blurb{
    text-align:center;
    margin:auto;
  }
  .AH{
    margin-left:3rem;
    margin-right:-3rem;
  }
  button {
    all:initial;
    border: 0;
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
  .FormButton1{
      justify-content:center;
      text-align:center;
      border-radius:5px;
      border-color:${({theme}) => theme.colors.formbox.border};
      border-width:1px;
      border-style:solid;
      box-shadow:1px 1px 5px #efffff;
      font-size:20px;
      background-color:#feffff;
      margin-top:15px;
      padding:.2rem;
      color: ${({ theme }) => theme.colors.button.text};
  }
  .FormBox1 {
        background-color:${({theme}) => theme.colors.formbox.bg};
        margin:1px 25px;
        border-color:${({theme}) => theme.colors.formbox.border};
        border-radius:5px;
        border-style:solid;
        border-width:1px;
        height:3rem;
        width:75%;
    }
    .FormBox1:focus{
        border-color:#b6dbd4;
        border-width:1px;
        border-radius:5px;
        box-shadow:inset 0px 0px 2px #03c6a3;
        outline:none;
    }
    .FormBox1:invalid{
        border-color:#ff3f51;
        border-width:1px;
        border-radius:2px;
        color:#ff3f51;
    }
    #lynxgamingnetwork {
        margin-left: 6vh;
}
    .reveal{
        all:initial;
        background-color:transparent;
        opacity:.9;
        color:#005b4a;
        position:static;
        margin-right:-17px;
    }
    .reveal:hover{
        opacity:1;
    }
`;
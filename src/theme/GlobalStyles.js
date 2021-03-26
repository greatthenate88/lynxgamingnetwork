import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
  a:hover{
    color: ${({ theme }) => theme.colors.link.hover};
    transform:scale(1.05);
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all .1s linear;
  }
  h4{
    padding-top:.8rem;
  }
  p{
    color: ${({ theme }) => theme.colors.link.text};
    font-size:1.1rem;
  }
  .active-article{
    border-right:1px solid lightgrey;
    width:100%;
    margin-top:auto;
    padding-left:8rem;
  }
  .article-body{
    text-align:justify;
    padding-right:15%;
    padding-left:15%;
  }
  .about-author{
    width:50%;
    text-align:left;
    line-height: 1.6;
    color: #3a3a3a;
    box-sizing: inherit;
    vertical-align: baseline;
    margin-left:15%;
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

  }
  .article-skeleton{
    text-align:left;
    .heading{

      padding:1rem;
    }
    .content{

      padding:1rem;
    }
  }
  .author-img-container{
    line-height: 1.6;
    color: #3a3a3a;
    vertical-align: middle;
    float: left;
    clear: right;
    text-align: center;
    margin:auto;
  }
  .author-img{
    border-radius:50%;
    height:4rem;
    margin-right:1rem;
  }
  .author-info-container{
    line-height: 1.6;
    color: #3a3a3a;
    vertical-align: baseline;
    width: 100%;
    display: flex;
  }
  .author-info{
    line-height: 1.6;
    color: #3a3a3a;
    box-sizing: inherit;
    vertical-align: baseline;
    text-align: left;
  }
  .author-blurb{
    text-align:left;
    margin:auto;
  }
  .AH{
    width:99%;
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
  .in-art-img{
    float:inline-start;
  }
  #lynxgamingnetwork {
    margin-left: 6vh;
  }
.modal-btn{
  padding:.2rem;
  margin:.2rem;
  color:${({theme}) => theme.colors.modal.btntext};
  background-color:${({theme}) => theme.colors.modal.btnbg};
}
.modal-input-container{
  position:absolute;
  display:inline-block;
  width:97%;
  justify-content:space-around;
}
.modal-input{
  width:100%;
  max-height:650px;
  padding: 12px 20px;
  background-color: #fcfffd;
  resize: vertical;
}
.mymodal{
  background-color:${({theme}) => theme.colors.body};
  color:${({theme}) => theme.colors.text};
  position:sticky;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height:60%;
  width:50%;
  border-style:solid;
  border-width:1px;
  border-radius: 6px;
  border-color:${({theme}) => theme.colors.modal.bordercolor};
  padding: 20px;
  box-shadow:0 0 .1rem #03c6a3;
  overflow:scroll;
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
.ReactModal__Overlay {
  opacity: 0;
  transition: opacity .25s ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
  z-index:21;
}

.ReactModal__Overlay--before-close {
  opacity: 0;
}
  .SCF{
    background-color: ${({theme}) => theme.colors.foot.bc};
  }
`;
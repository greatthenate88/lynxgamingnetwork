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
  p:hover{
    color: ${({ theme }) => theme.colors.link.hover};
    transform:scale(1.05);
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

`;
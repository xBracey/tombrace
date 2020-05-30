import styled, { createGlobalStyle } from "styled-components";
import config from "../../config";
import { mobileMixin } from "../../index.styled";

export const OuterLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${config.colors.WHITE};
    width: 100vw;
`;

export const InnerLayout = styled.div`
    display: flex;
    width: 100%;
    max-width: 1000px;
    padding: 50px 25px;
    flex-wrap: wrap;

    ${mobileMixin(`
        flex-direction: column;
    `)}
`;

export const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,p,a,li,code {
    color: ${config.colors.BLACK};
    font-family: 'Rubik';
  }
  
  body {
      margin: 0;
      padding: 0;
      min-height: 101vh; 
  }

  h1 {
      font-size: 36px;
  }
  
  h2 {
      font-size: 32px;
  }

  h3 {
      font-size: 28px;
  }
`;

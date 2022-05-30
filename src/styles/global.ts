import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --shape: #ffffff;
    --red: #e52d4d;
    --blue: #5429cc;
    --green: #33CC95;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #9696b3;
    --text-light: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media(max-width: 1080px){
      font-size: 96.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }
  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
`
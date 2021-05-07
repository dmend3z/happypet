import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
  body {
    font-family: Gotham,Arial,Helvetica Neue,Helvetica,sans-serif;
    font-weight: 300;
    font-size: 14px;
  }
  body.fontLoaded {
    font-family: Gotham,Arial,Helvetica Neue,Helvetica,sans-serif;
  }
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;    
  }
  p,
  label {
    font-family: Gotham,Arial,Helvetica Neue,Helvetica,sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
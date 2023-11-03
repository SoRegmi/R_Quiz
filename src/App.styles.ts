import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    americanSilver: '#d1d1d1',
    black: '#000',
    flavescent: ' #fbe18f',
    gray: '#ccc',
    greenSurface: '#589F7E',
    orangeRed: '#FF5349',
    primary: '#FCC822',
    secondary: '#333333',
    spanishGray: '#999',
    sunglow: '#ffcd2e',
    white: '#fff',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    min-height: 100vh;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > p {
    color: #fff;
  }
`;

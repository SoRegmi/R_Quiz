import React from 'react';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './App.styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </>
  );
};

export default App;

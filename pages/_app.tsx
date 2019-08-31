import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  html {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    background: linear-gradient(to bottom, #4667dd, #b06ab3);
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes hide {
    from {
      opacity: 1;
    }
    5% {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
`;
export interface ThemeType {
  colors: {
    yellow: string;
    grey: string;
    black: string;
    white: string;
    red: string;
    green: string;
  };
}
const theme: ThemeType = {
  colors: {
    yellow: "#FFD205",
    grey: "#DDDDDD",
    black: "#000000",
    white: "#ffffff",
    red: "#ed7053",
    green: "#c5de95"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

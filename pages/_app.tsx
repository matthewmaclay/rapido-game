import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import ReactGA from "react-ga";
import Head from "next/head";

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
  componentDidMount() {
    ReactGA.initialize("UA-139945630-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>Rapido Game</title>
            <link
              rel="shortcut icon"
              type="image/png"
              href="/static/favicon.ico"
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

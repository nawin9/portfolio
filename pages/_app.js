import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import config from '../config';

const { device } = config;

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    html {
        margin: 0;
        padding: 0;
        height: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    body {
        height: 100%;
        background-color: #1d1f21;
        color: #c9cacc;
        font-weight: 400;
        font-size: 14px;
        font-family: 'Quicksand', monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.725;
        text-rendering: geometricPrecision;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        margin: 0 auto;
        max-width: 48rem;
        padding: 0 2rem;

        @media ${device.mobile} {
            padding: 0 1rem;
            margin: 2rem auto;
        }
    }

    @font-face {
        font-family: 'Quicksand';
        src: url('/static/fonts/Quicksand-Regular.ttf');
        font-weight: normal;
        font-display: auto;
        font-style: normal;
    }

    @font-face {
        font-family: 'QuicksandBold';
        src: url('/static/fonts/Quicksand-Bold.ttf');
        font-weight: bold;
        font-display: auto;
        font-style: normal;
    }

    @media ${device.mobile} {
        p {
            text-align: justify;
        }
    }

`;

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <GlobalStyle />
                <Component {...pageProps} />
            </Container>
        );
    }
}

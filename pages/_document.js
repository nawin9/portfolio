import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Header from '../components/Header';

class HTMLDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />

                    <meta name="title" content="Nawin Kim" />
                    <meta
                        name="description"
                        content="As a full stack developer, I am specialized in Front-End technologies."
                    />

                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="canonical" href="https://nawin.kim/" />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://nawin.kim/" />
                    <meta property="og:title" content="Nawin Kim" />
                    <meta
                        property="og:description"
                        content="As a full stack developer, I am specialized in Front-End technologies."
                    />
                    <meta property="og:image" content="https://nawin.kim/static/cover.png" />
                    <meta property="og:locale" content="en" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://nawin.kim/" />
                    <meta property="twitter:title" content="Nawin Kim" />
                    <meta
                        property="twitter:description"
                        content="As a full stack developer, I am specialized in Front-End technologies."
                    />
                    {this.props.styleTags}
                    <noscript>
                        <div className="flex center">
                            <div className="card noscript">
                                You need to enable JavaScript to run this app.
                            </div>
                        </div>
                    </noscript>
                </Head>
                <body>
                    <Header />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default HTMLDocument;

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Error = () => (
    <>
        <Head>
            <title>Error - Nawin Kim</title>
        </Head>

        <div>
            <h2>
                <code>404 Not Found</code>
            </h2>
            <img
                src="/static/icons/not-found.svg"
                alt="Undraw.co 404 illustration"
                style={{
                    objectFit: 'contain',
                    width: '100%',
                    maxHeight: '300px',
                    margin: '64px 0',
                    padding: '0 32px',
                }}
            />
            <div style={{ display: 'none' }}>
                Icons made by
{' '}
                <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">
                    itim2101
                </a>
{' '}
                from
{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
{' '}
                is licensed by
{' '}
                <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CC 3.0 BY
                </a>
            </div>

            <Link href="/">
                <button type="button">Back to the site</button>
            </Link>
        </div>
    </>
);

export default Error;

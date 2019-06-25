import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';

export default () => (
    <>
        <Head>
            <title>Nawin Kim - Projects</title>
        </Head>
        <Header />
        <section>
            <div>Project Section</div>
            <Link href="/">
                <button type="button">Back to Home Page</button>
            </Link>
        </section>
    </>
);

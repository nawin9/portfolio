import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';

import info from '../data/info';
import config from '../config';

const { device, color } = config;

const CenteredHeader = styled.h4`
    text-align: center;
    margin-bottom: 1.25em;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 20px;

    @media ${device.mobile} {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.a`
    display: inline-block;
    background: linear-gradient(
        20deg,
        #a1d9b4 10%,
        ${color.primary} 20%,
        #000e3c 100%
    );
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    color: white;
    text-decoration: none;

    h1 {
        font-size: 1.4rem;
    }

    h3 {
        font-size: 1rem;
    }

    p {
        font-style: italic;
    }

    &:hover {
        cursor: pointer;
    }
`;

export default () => (
    <>
        <Head>
            <title>Nawin Kim - Projects</title>
        </Head>
        <Header />
        <section>
            <CenteredHeader>Recent Projects</CenteredHeader>
            <Container>
                {info.projects.map((p, index) => (
                    <Card key={index} href={p.link}>
                        <div />
                        <h1>{p.title}</h1>
                        <h3>{p.description}</h3>
                        <p>{p.development}</p>
                    </Card>
                ))}
            </Container>
        </section>
    </>
);

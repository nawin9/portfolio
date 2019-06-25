import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/Header';

import info from '../data/info';

const CenteredHeader = styled.h4`
    text-align: center;
    margin-bottom: 1.25em;
`;

const ContainerRow = styled.li`
    min-height: 90px;

    h3 {
        text-decoration: underline;
    }
`;

export default () => (
    <>
        <Head>
            <title>Nawin Kim - Skills</title>
        </Head>
        <Header />
        <section>
            <CenteredHeader>Skills</CenteredHeader>
            <ul>
                {info.skills.map((s, index) => (
                    <ContainerRow key={index}>
                        <h3>{s.title}</h3>
                        <p>{s.description}</p>
                    </ContainerRow>
                ))}
            </ul>
        </section>
    </>
);

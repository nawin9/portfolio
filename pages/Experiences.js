import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import Header from '../components/Header';

import info from '../data/info';
import config from '../config';

const { color } = config;

const CenteredHeader = styled.h4`
    text-align: center;
    margin-bottom: 1.25em;
`;

const DetailRow = styled.ul`
    li {
        list-style-type: square;
    }
`;

const cardBorderRadius = '10px';
const contentBorderRadius = '8px';

export default () => (
    <>
        <Head>
            <title>Nawin Kim - Experiences</title>
        </Head>
        <Header />
        <section>
            <CenteredHeader>Experiences</CenteredHeader>
            <Timeline>
                {info.experiences.map((exp, index) => (
                    <TimelineEvent
                        key={index}
                        title={exp.rightContent}
                        subtitle={exp.title}
                        container="card"
                        bubbleStyle={{ background: '#1d1f21' }}
                        titleStyle={{ color: 'white', fontSize: '0.8rem' }}
                        subtitleStyle={{ color: 'white', fontSize: '0.7rem' }}
                        style={{ borderRadius: cardBorderRadius }}
                        cardHeaderStyle={{
                            borderTopRightRadius: contentBorderRadius,
                            borderTopLeftRadius: contentBorderRadius,
                            background: color.tertiary,
                        }}
                        contentStyle={{
                            background: color.quaternary,
                            borderBottomLeftRadius: contentBorderRadius,
                            borderBottomRightRadius: contentBorderRadius,
                        }}
                    >
                        <DetailRow>
                            {exp.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                            ))}
                        </DetailRow>
                    </TimelineEvent>
                ))}
            </Timeline>
        </section>
    </>
);

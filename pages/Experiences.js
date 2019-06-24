import React from 'react';
import styled from 'styled-components';
import info from '../data/info';
import config from '../config';

const { device, color } = config;

const CenteredHeader = styled.h4`
    text-align: center;
    margin-bottom: 1.25em;
`;

const DetailColumn = styled.div`
    display: grid;
    text-align: left;
`;

const DetailRow = styled.div`
    margin-top: 30px;

    div {
        display: grid;
        grid-template-columns: 3fr 1fr;
        margin-top: 10px;
        padding: 10px;
        background: ${color.tertiary};
        border-radius: 4px;

        p {
            margin: 0;
            font-family: 'QuicksandBold';

            :nth-child(2) {
                text-align: right;
            }
        }

        @media ${device.mobile} {
            grid-template-columns: 1fr;
            grid-auto-rows: minmax(10px, auto);

            p {
                :nth-child(1) {
                    order: 2;
                }

                :nth-child(2) {
                    text-align: left;
                    order: 1;
                }
            }
        }

        li {
            list-style-type: square;
            margin-left: 18px;
        }
    }
`;

export default () => (
    <section>
        <CenteredHeader>Experiences</CenteredHeader>
        <DetailColumn>
            {info.experiences.map((exp, index) => (
                <DetailRow key={index}>
                    <div>
                        <p>{exp.title}</p>
                        <p>{exp.rightContent}</p>
                    </div>
                    <ul>
                        {exp.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                </DetailRow>
            ))}
        </DetailColumn>
    </section>
);

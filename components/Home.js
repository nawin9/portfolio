import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import info from '../data/info';

const Home = styled.section`
    p:last-child {
        margin-top: 5em;
    }

    p a {
        color: #c9cacc;
        margin-left: 20px;

        :hover {
            color: #2bbc8a;
        }
    }
`;

export default () => (
    <Home>
        {info.introduction.texts.map((t, index) => (
            <p key={index}>{t}</p>
        ))}

        <p>
            Find me on
            {info.socialNetworks.map((s, index) => (
                <a key={index} target="_blank" rel="noopener noreferrer" href={s.link}>
                    <FontAwesomeIcon icon={s.icon} size="2x" width="0" />
                </a>
            ))}
        </p>
    </Home>
);

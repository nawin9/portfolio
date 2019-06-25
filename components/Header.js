import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import config from '../config';
import info from '../data/info';

const { device, color } = config;

const ProfileImage = styled.img`
    width: 16em;
    height: 16em;
    border-radius: 50%;
    border: 1px solid ${color.primary};
`;

const Nav = styled.ul`
    letter-spacing: 0.01em;
    font-weight: 200;
    font-style: normal;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 15px;

    a {
        margin-right: 15px;
        color: ${color.primary};
        text-decoration: none;

        :hover {
            background-image: linear-gradient(
                transparent,
                transparent 5px,
                ${color.primary} 5px,
                ${color.primary}
            );
            background-position: bottom;
            background-size: 100% 6px;
            background-repeat: repeat-x;
            color: ${color.primary};
        }
    }

    li {
        display: inline-block;
        margin-right: 15px;
        border-right: 1px dotted ${color.primary};
        vertical-align: middle;

        :last-child {
            border-right: none;
            margin-right: 0;
        }
    }

    @media ${device.mobileS} {
        li {
            margin-right: 8px;
            :last-child {
                margin-right: 0;
            }
        }
    }
`;

const Header = styled.header`
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }

    a h1 {
        color: ${color.primary};
    }

    hr {
        margin-top: 40px;
        border: 0.5px solid ${color.primary};
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default () => (
    <Header>
        <ProfileImage src="/static/profile.png" alt="profile-pic" />
        <Link href="/">
            <h1>Nawin Kim</h1>
        </Link>

        <Nav>
            {info.navigations.map((item, index) => (
                <li key={index}>
                    <Link href={item.path}>
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </Nav>
        <hr />
    </Header>
);

import React from 'react';
import styled from 'styled-components';

import Home from './Home';

const Content = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-wrap: break-word;
`;

export default () => (
    <Content>
        <main>
            <Home />
        </main>
    </Content>
);

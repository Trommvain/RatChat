// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { RowTypes } from '../../components';

// Styles
const SecondRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / repeat(10, 1fr);
    align-content: center;
`;

export const SecondRow: FC<{secondRow: RowTypes}> = ({ secondRow }) => {
    const spans = secondRow.map((item, index) => (
        <span key = { index }>{ item }</span>
    ));

    return (
        <SecondRowContainer>
            { spans }
        </SecondRowContainer>
    );
};

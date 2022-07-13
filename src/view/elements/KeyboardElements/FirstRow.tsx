// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { RowTypes } from '../../components';

// Styles
const FirstRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / repeat(10, 1fr);
    align-content: center;
`;

export const FirstRow: FC<{firstRow: RowTypes}> = ({ firstRow }) => {
    const spans = firstRow.map((item, index) => (
        <span key = { index }>{ item }</span>
    ));

    return (
        <FirstRowContainer>
            { spans }
        </FirstRowContainer>
    );
};

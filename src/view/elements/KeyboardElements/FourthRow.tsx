// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { RowTypes } from '../../components';

// Styles
const FourthRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / repeat(8, 1fr) 2fr;
    align-content: center;
`;

export const FourthRow: FC<{ fourthRow: RowTypes }> = ({ fourthRow }) => {
    const spans = fourthRow.map((item, index) => (
        <span key = { index }>{ item }</span>
    ));

    return (
        <FourthRowContainer>
            { spans }
        </FourthRowContainer>
    );
};

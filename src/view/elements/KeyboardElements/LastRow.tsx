// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { RowTypes } from '../../components';

// Styles
const LastRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / 1fr 1fr 3fr 1fr 1fr;
    align-content: center;
`;

export const LastRow: FC<{ lastRow: RowTypes }> = ({ lastRow }) => {
    const spans = lastRow.map((item, index) => (
        <span key = { index }>{ item }</span>
    ));

    return (
        <LastRowContainer>
            { spans }
        </LastRowContainer>
    );
};

// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { RowTypes } from '../../components';

// Styles
const ThirdRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / repeat(9, 1fr);
    align-content: center;
`;

export const ThirdRow: FC<{thirdRow: RowTypes}> = ({ thirdRow }) => {
    const spans = thirdRow.map((item, index) => (
        <span key = { index }>{ item }</span>
    ));

    return (
        <ThirdRowContainer>
            { spans }
        </ThirdRowContainer>
    );
};

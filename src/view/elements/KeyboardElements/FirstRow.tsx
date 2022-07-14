// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Bus
import { useKeyboard } from '../../../bus/keyboard';

// Types
import { RowTypes } from '../../components';

// Styles
const FirstRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / repeat(10, 1fr);
    align-content: center;
`;

export const FirstRow: FC<{firstRow: RowTypes}> = ({ firstRow }) => {
    const { getKeyboardSymbol } = useKeyboard();

    const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        const key = event.target as HTMLElement;
        getKeyboardSymbol(key.innerText);
    };

    const spans = firstRow.map((item, index) => (
        <span
            key = { index }
            onClick = { (event) => buttonClickHandler(event) }>{ item }
        </span>
    ));

    return (
        <FirstRowContainer>
            { spans }
        </FirstRowContainer>
    );
};

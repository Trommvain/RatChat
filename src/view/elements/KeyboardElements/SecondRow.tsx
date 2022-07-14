// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Bus
import { useKeyboard } from '../../../bus/keyboard';

// Types
import { RowTypes } from '../../components';

// Styles
const SecondRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / repeat(10, 1fr);
    align-content: center;
`;

export const SecondRow: FC<{secondRow: RowTypes}> = ({ secondRow }) => {
    const { getKeyboardSymbol } = useKeyboard();

    const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        const key = event.target as HTMLElement;
        getKeyboardSymbol(key.innerText);
    };

    const spans = secondRow.map((item, index) => (
        <span
            key = { index }
            onClick = { (event) => buttonClickHandler(event) }>{ item }
        </span>
    ));

    return (
        <SecondRowContainer>
            { spans }
        </SecondRowContainer>
    );
};

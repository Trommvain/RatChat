// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Bus
import { useKeyboard } from '../../../bus/keyboard';

// Types
import { RowTypes } from '../../components';

// Styles
const LastRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / 1fr 1fr 3fr 1fr 1fr;
    align-content: center;
`;

export const LastRow: FC<{ lastRow: RowTypes }> = ({ lastRow }) => {
    const { getKeyboardSymbol } = useKeyboard();

    const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        const key = event.target as HTMLElement;
        if (key.innerText === 'Space') {
            getKeyboardSymbol(' ');
        } else if (key.innerText === 'En' || key.innerText === 'Enter') {
            getKeyboardSymbol('');
        } else {
            getKeyboardSymbol(key.innerText);
        }
    };

    const spans = lastRow.map((item, index) => (
        <span
            key = { index }
            onClick = { (event) => buttonClickHandler(event) }>{ item }
        </span>
    ));

    return (
        <LastRowContainer>
            { spans }
        </LastRowContainer>
    );
};

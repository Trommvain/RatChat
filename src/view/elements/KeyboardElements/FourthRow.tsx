// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Bus
import { useKeyboard } from '../../../bus/keyboard';

// Types
import { RowTypes } from '../../components';

// Styles
const FourthRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / repeat(8, 1fr) 2fr;
    align-content: center;
`;

export const FourthRow: FC<{ fourthRow: RowTypes }> = ({ fourthRow }) => {
    const { getKeyboardSymbol } = useKeyboard();

    const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        const key = event.target as HTMLElement;
        if (key.innerText === 'Shift' || key.innerText === 'Backspace') {
            getKeyboardSymbol('');
        } else {
            getKeyboardSymbol(key.innerText);
        }
    };

    const spans = fourthRow.map((item, index) => (
        <span
            key = { index }
            onClick = { (event) => buttonClickHandler(event) }>{ item }
        </span>
    ));

    return (
        <FourthRowContainer>
            { spans }
        </FourthRowContainer>
    );
};

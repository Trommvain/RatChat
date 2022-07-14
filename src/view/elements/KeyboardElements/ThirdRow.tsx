// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Bus
import { useKeyboard } from '../../../bus/keyboard';

// Types
import { RowTypes } from '../../components';

// Styles
const ThirdRowContainer = styled.div`
    display: grid;
    grid: 1.5rem / repeat(9, 1fr);
    align-content: center;
`;

export const ThirdRow: FC<{thirdRow: RowTypes}> = ({ thirdRow }) => {
    const { getKeyboardSymbol } = useKeyboard();

    const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        const key = event.target as HTMLElement;
        getKeyboardSymbol(key.innerText);
    };

    const spans = thirdRow.map((item, index) => (
        <span
            key = { index }
            onClick = { (event) => buttonClickHandler(event) }>{ item }
        </span>
    ));

    return (
        <ThirdRowContainer>
            { spans }
        </ThirdRowContainer>
    );
};

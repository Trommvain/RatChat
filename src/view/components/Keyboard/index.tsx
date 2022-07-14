// Core
import React from 'react';
import { FirstRow, SecondRow, FourthRow, LastRow, ThirdRow } from '../../elements';

// Styles
import * as S from './styles';

// Types
export type RowTypes = Array<string>;

const firstRow: RowTypes = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
const secondRow: RowTypes = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ];
const thirdRow: RowTypes = [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ];
const fourthRow: RowTypes = [ 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace' ];
const lastRow: RowTypes = [ ',', 'En', 'Space', '.', 'Enter' ];

export const Keyboard = () => {
    return (
        <S.Container>
            <FirstRow firstRow = { firstRow } />
            <SecondRow secondRow = { secondRow } />
            <ThirdRow thirdRow = { thirdRow } />
            <FourthRow fourthRow = { fourthRow } />
            <LastRow lastRow = { lastRow } />
        </S.Container>
    );
};

// Core
import React from 'react';

// Bus
import { useKeyboard } from '../../../bus/client/keyboard';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Tools
import { useSelector } from '../../../tools/hooks';

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
    const { getKeyboardSymbol, removeSymbol } = useKeyboard();
    const messageText = useSelector((state) => state.keyboard);
    const { togglersRedux: { isShiftPressed }, setTogglerAction } = useTogglersRedux();


    const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        const key = event.target as HTMLElement;
        if (key.innerText === 'Shift') {
            getKeyboardSymbol('');
            setTogglerAction({ type: 'isShiftPressed', value: !isShiftPressed });
        } else if (key.innerText === 'Backspace') {
            if (messageText) {
                removeSymbol(messageText);
            }
        } else if (key.innerText === 'Space') {
            getKeyboardSymbol(' ');
        } else if (key.innerText === 'En' || key.innerText === 'Enter') {
            getKeyboardSymbol('');
        } else {
            getKeyboardSymbol(key.innerText);
        }
    };

    return (
        <S.Container>
            <S.FirstSecondRow>
                {
                    firstRow.map((item, index) => (
                        <S.Key
                            key = { index }
                            onClick = { (event) => buttonClickHandler(event) }>{ item }
                        </S.Key>
                    ))
                }
            </S.FirstSecondRow>
            <S.FirstSecondRow>
                {
                    secondRow.map((item, index) => (
                        <S.Key
                            key = { index }
                            onClick = { (event) => buttonClickHandler(event) }>{
                                isShiftPressed ? item.toUpperCase() : item
                            }
                        </S.Key>
                    ))
                }
            </S.FirstSecondRow>
            <S.ThirdRow>
                {
                    thirdRow.map((item, index) => (
                        <S.Key
                            key = { index }
                            onClick = { (event) => buttonClickHandler(event) }>{
                                isShiftPressed ? item.toUpperCase() : item
                            }
                        </S.Key>
                    ))
                }
            </S.ThirdRow>
            <S.FourthRow>
                {
                    fourthRow.map((item, index) => (
                        <S.Key
                            key = { index }
                            onClick = { (event) => buttonClickHandler(event) }>{
                                isShiftPressed && item !== 'Shift' && item !== 'Backspace' ? item.toUpperCase() : item
                            }
                        </S.Key>
                    ))
                }
            </S.FourthRow>
            <S.LastRow>
                {
                    lastRow.map((item, index) => (
                        <S.Key
                            key = { index }
                            onClick = { (event) => buttonClickHandler(event) }>{ item }
                        </S.Key>
                    ))
                }
            </S.LastRow>
        </S.Container>
    );
};

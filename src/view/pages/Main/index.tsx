// Core
import React, { FC, useEffect, useState } from 'react';
import { useKeyCode } from '../../../bus/keyCode';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, ChatWindow, Keyboard } from '../../components';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { user, logout } = useUser();
    const [ keyboardToggler, setKeyboardToggler ] = useState(false);
    const { dispatchKeyCode, dispatchKeyRemove } = useKeyCode();


    const toggleKeyboard = () => {
        setKeyboardToggler(!keyboardToggler);
    };


    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            dispatchKeyCode(event.keyCode);
        });

        window.addEventListener('keyup', (event) => {
            dispatchKeyRemove(event.keyCode);
        });
    }, []);

    return (
        <S.Container>
            <S.Header>
                <S.WelcomeSign>Welcome, { user?.username }!</S.WelcomeSign>
                <S.LogoutBtn
                    onClick = { logout }>LOGOUT
                </S.LogoutBtn>
            </S.Header>
            <ChatWindow />
            <S.ShowKeyboardBtn
                onClick = { toggleKeyboard }>{ keyboardToggler ? 'CLOSE' : 'SHOW KEYBOARD' }
            </S.ShowKeyboardBtn>
            { keyboardToggler ? <Keyboard/> : null }

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

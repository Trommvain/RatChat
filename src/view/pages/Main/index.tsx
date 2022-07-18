// Core
import React, { FC, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, ChatWindow, Keyboard } from '../../components';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { user, logout } = useUser();
    const [ keyboardToggler, setKeyboardToggler ] = useState(false);

    const toggleKeyboard = () => {
        setKeyboardToggler(!keyboardToggler);
    };

    window.addEventListener('keydown', (event) => {
        console.log(event.key);
    });

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

// Core
import React, { FC, useState } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, InputWindow, Keyboard } from '../../components';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { user } = useUser();
    const { resetTogglersToInitial } = useTogglersRedux();
    const [ keyboardToggler, setKeyboardToggler ] = useState(false);

    const logout = () => {
        localStorage.clear();
        resetTogglersToInitial();
    };

    const toggleKeyboard = () => {
        setKeyboardToggler(!keyboardToggler);
    };

    return (
        <S.Container>
            <header>
                <p className = 'welcome'>Welcome, { user?.username }!</p>
                <button
                    className = 'btn-logout'
                    onClick = { logout }>LOGOUT
                </button>
            </header>
            <InputWindow />

            <button
                className = 'btn-show-keyboard'
                onClick = { toggleKeyboard }>{ keyboardToggler ? 'CLOSE' : 'SHOW KEYBOARD' }
            </button>
            { keyboardToggler ? <Keyboard/> : null }

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

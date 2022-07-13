// Core
import React, { FC } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, InputWindow } from '../../components';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { user } = useUser();
    const { resetTogglersToInitial } = useTogglersRedux();

    const logout = () => {
        localStorage.clear();
        resetTogglersToInitial();
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
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

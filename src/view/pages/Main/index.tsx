// Core
import React, { FC } from 'react';
// import { useUser } from '../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

const Main: FC = () => {
    return (
        <S.Container>
            Page: Chat
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

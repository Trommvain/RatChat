// Core
import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

// Components
import { ErrorBoundary } from '../../components';
import { Spinner } from '../../elements';

// Bus
import { useUser } from '../../../bus/user';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

//Types
export type FormValueType = {
    nickName: string,
}

const Registration: FC = () => {
    const { registerUser } = useUser();

    const randomId = v4()
        .slice(0, 5)
        .toUpperCase();

    const [ nickName, setNickName ] = useState(`RAT:${randomId}`);

    const { togglersRedux:{ isAuthLoading }, setTogglerAction } = useTogglersRedux();

    return (
        <S.Container>
            { isAuthLoading && <Spinner/> }
            <S.RegistrationForm
                onSubmit = { (event) => {
                    setTogglerAction({ type: 'isAuthLoading', value: true });
                    event.preventDefault();
                    registerUser(nickName);
                }
                }>
                <S.UserName>Enter your ratname:</S.UserName>
                <input
                    required
                    name = 'text'
                    placeholder = 'Your name...'
                    type = 'text'
                    value = { nickName }
                    onChange = { (event) => setNickName(event.target.value) }
                />
                <S.SubmitBtn
                    type = 'submit'>DROP INTO HOLE
                </S.SubmitBtn>
            </S.RegistrationForm>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);

// Core
import React, { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

// Components
import { ErrorBoundary } from '../../components';
import { Spinner } from '../../elements';

// Styles
import { Container } from './styles';
import { useUser } from '../../../bus/user';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { USER_ID } from '../../../init';

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

    const user = localStorage.getItem(USER_ID);
    useEffect(() => {
        if (user) {
            setTogglerAction({ type: 'isAuthLoading', value: true });
        }
    }, []);

    return (
        <Container>
            { isAuthLoading && <Spinner/> }
            <form
                onSubmit = { (event) => {
                    setTogglerAction({ type: 'isAuthLoading', value: true });
                    event.preventDefault();
                    registerUser(nickName);
                }
                }>
                <label className = 'form-item'>Enter your ratname:</label>
                <input
                    required
                    name = 'text'
                    placeholder = 'Your name...'
                    type = 'text'
                    value = { nickName }
                    onChange = { (event) => setNickName(event.target.value) }
                />
                <button
                    className = 'submit-button'
                    type = 'submit'>DROP INTO HOLE
                </button>
            </form>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);

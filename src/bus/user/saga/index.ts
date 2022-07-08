// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';
import { USER_ID } from '../../../init';

// Watchers & Actions
import { registerUserAction, watchRegisterUser } from './registerUser';
import { refreshUserAction, watchRefreshUser } from './refreshUser';

export const useUserSaga = () => {
    const dispatch = useDispatch();

    return {
        registerUser: (userName: string) => void dispatch(registerUserAction(userName)),
        refreshUser:  () => {
            const userId = localStorage.getItem(USER_ID);
            userId && dispatch(refreshUserAction(userId));
        },
    };
};

export function* watchUser(): SagaIterator {
    yield all([ call(watchRegisterUser), call(watchRefreshUser) ]);
}

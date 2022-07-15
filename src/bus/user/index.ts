// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { useTogglersRedux } from '../client/togglers';

// Slice
import { userActions } from './slice';

// Saga
import { useUserSaga } from './saga';

export const useUser = () => {
    const dispatch = useDispatch();
    const { resetTogglersToInitial } = useTogglersRedux();
    const { registerUser, refreshUser } = useUserSaga();
    const user = useSelector((state) => state.user);

    const logout = () => {
        localStorage.clear();
        dispatch(userActions.clearUser());
        resetTogglersToInitial();
    };

    return {
        user,
        registerUser,
        refreshUser,
        logout,
    };
};

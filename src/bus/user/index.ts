// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useUserSaga } from './saga';

export const useUser = () => {
    const { registerUser, refreshUser } = useUserSaga();
    const user = useSelector((state) => state.user);

    return {
        user,
        registerUser,
        refreshUser,
    };
};

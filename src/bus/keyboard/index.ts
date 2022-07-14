// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { keyboardActions } from './slice';

// Types
import { KeyboardSymbol } from './types';

export const useKeyboard = () => {
    const dispatch = useDispatch();
    const keyboardSymbol = useSelector((state) => state.keyboard);

    const getKeyboardSymbol = (symbol: KeyboardSymbol) => void dispatch(keyboardActions.setKeyboard(symbol));
    const setClearKeyboard = () => void dispatch(keyboardActions.clearKeyboard(''));
    const removeSymbol = () => void dispatch(keyboardActions.removeSymbol(''));

    return {
        keyboardSymbol,
        getKeyboardSymbol,
        setClearKeyboard,
        removeSymbol,
    };
};

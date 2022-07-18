// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.KeyboardSymbol> = (state, action) => {
    if (!state) {
        return action.payload;
    }

    return state.concat(action.payload);
};

export const clearKeyboard: types.BaseContact<types.KeyboardSymbol> = (state) => {
    return state?.slice(state.length);
};

export const removeSymbol: types.BaseContact<types.KeyboardSymbol> = (state) => {
    if (state?.length === 1) {
        return null;
    }

    return state?.slice(0, state.length - 1);
};

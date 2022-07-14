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
    return state?.substring(0, state.length);
};

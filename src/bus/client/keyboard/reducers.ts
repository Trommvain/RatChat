// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.KeyboardSymbol> = (state, action) => {
    state.text += action.payload;
};

export const clearKeyboard: types.BaseContact<types.KeyboardSymbol> = (state) => {
    state.text = '';
};

export const removeSymbol = (state: any) => {
    state.text = state.text.substring(0, state.text.length - 1);
};

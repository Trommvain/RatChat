// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.KeyboardSymbol> = (__, action) => {
    return action.payload;
};

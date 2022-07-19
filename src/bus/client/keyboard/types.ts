// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type KeyboardSymbol = string;
export type KeyboardSymbolState = {
    text: string
}

// Contracts
export type BaseContact<T = any> = CaseReducer<KeyboardSymbolState, PayloadAction<T>>

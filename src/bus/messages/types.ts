// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Message = {
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    isEdited: boolean,
    children?: React.ReactNode,
}

export type userMessage = {
    username: string,
    text: string
}

export type editedMessage = {
    text: string,
    id: string
}

export type Messages = Array<Message>
export type MessagesState = Messages | null

// Contracts
export type BaseContact<T = any> = CaseReducer<MessagesState, PayloadAction<T>>

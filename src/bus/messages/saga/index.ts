// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { sendMessageAction, watchSendMessage } from './sendMessage';
import { deleteMessageAction, watchDeleteMessage } from './deleteMessage';
import { editMessageAction, watchEditMessage } from './editMessage';

// Types
import * as types from '../types';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchMessages: () => void dispatch(fetchMessagesAction(1)),
        sendMessage:   (message: types.userMessage) => dispatch(sendMessageAction(message)),
        deleteMessage: (id: string) => dispatch(deleteMessageAction(id)),
        editMessage:   (message: types.editedMessage) => dispatch(editMessageAction(message)),
    };
};

export function* watchMessages(): SagaIterator {
    yield all([
        call(watchFetchMessages),
        call(watchSendMessage),
        call(watchDeleteMessage),
        call(watchEditMessage),
    ]);
}

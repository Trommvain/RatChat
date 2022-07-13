// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';

export const useMessages = (isFetching?: boolean) => {
    const { fetchMessages, sendMessage, deleteMessage, editMessage } = useMessagesSaga();
    const messages = useSelector((state) => state.messages);

    useEffect(() => {
        isFetching && fetchMessages();
    }, []);

    return {
        messages,
        fetchMessages,
        sendMessage,
        deleteMessage,
        editMessage,
    };
};

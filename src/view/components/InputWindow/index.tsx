// Core
import React, { FC, useState } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';
import { MessageItem } from '../MessageItem';


export const InputWindow: FC = () => {
    const { user } = useUser();
    const { sendMessage } = useMessages(true);
    const [ userMessage, setUserMessage ] = useState('');

    const messagesArray = useMessages().messages;

    const sendMessageHandler = () => {
        sendMessage({ username: (user?.username) as string, text: userMessage });
        setUserMessage(''); //clearing input field after sending a message
    };

    const messages = messagesArray?.map((messages: Message, index: number) => (
        <MessageItem
            key = { index }
            { ...messages }>
        </MessageItem>
    ));

    const enterPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            sendMessageHandler();
        }
    };

    return (
        <S.Container>
            <div className = 'messages-block'>
                { messages }
            </div>
            <section className = 'input-message-block'>
                <input
                    className = 'input-field'
                    type = 'text'
                    value = { userMessage }
                    onChange = { (event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserMessage(event.target.value);
                    } }
                    onKeyUp = { (event) => enterPressHandler(event) }
                />
                <button
                    className = 'send-message-btn'
                    disabled = { userMessage === '' }
                    onClick = { sendMessageHandler }>SEND
                </button>
            </section>
        </S.Container>
    );
};

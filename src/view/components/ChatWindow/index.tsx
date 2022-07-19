// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { useKeyboard } from '../../../bus/client/keyboard';

// Styles
import * as S from './styles';

// Components
import { MessageItem } from '../MessageItem';

// Types
import { Message } from '../../../bus/messages/types';

export const ChatWindow: FC = () => {
    const { user } = useUser();
    const { sendMessage } = useMessages(true);
    const [ userMessage, setUserMessage ] = useState('');
    const { keyboardSymbol, setClearKeyboard } = useKeyboard();

    const messagesArray = useMessages().messages;

    const sendMessageHandler = () => {
        if (user) {
            sendMessage({ username: user.username, text: userMessage });
        }
        setUserMessage(''); //clearing input field after sending a message
        setClearKeyboard();
    };

    useEffect(() => {
        if (keyboardSymbol) {
            setUserMessage(keyboardSymbol.text);
        }
    }, [ keyboardSymbol ]);

    const enterPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            sendMessageHandler();
        }
    };

    return (
        <S.Container>
            <S.MessagesBlock>
                {
                    messagesArray?.map((messages: Message, index: number) => (
                        <MessageItem
                            key = { index }
                            { ...messages }
                        />
                    ))
                }
            </S.MessagesBlock>
            <S.InputMessageBlock>
                <S.InputField
                    type = 'text'
                    value = { userMessage }
                    onChange = { (event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserMessage(event.target.value);
                    } }
                    onKeyUp = { (event) => enterPressHandler(event) }
                />
                <S.SendMessageBtn
                    disabled = { userMessage === '' }
                    onClick = { sendMessageHandler }>SEND
                </S.SendMessageBtn>
            </S.InputMessageBlock>
        </S.Container>
    );
};

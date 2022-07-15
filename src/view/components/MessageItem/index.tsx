/* eslint-disable no-alert */
// Core
import React, { FC, useState } from 'react';
import moment from 'moment';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';

// Styles
import * as S from './styles';

// Types
import { Message } from '../../../bus/messages/types';

export const MessageItem: FC<Message> = (message: Message) => {
    const { user } = useUser();
    const { deleteMessage, editMessage } = useMessages();
    const [ isEditing, setIsEditing ] = useState(false);
    const [ value, setValue ] = useState('');

    const deleteMessageHandler = () => {
        if (confirm('Delete this message?')) {
            if (isEditing) {
                setIsEditing(false);
            }
            deleteMessage(message._id);
        }
    };

    const editMessageHandler = () => {
        setIsEditing(true);
        setValue(message.text);
    };

    const submitChanges = () => {
        const editedMessage = {
            text: value,
            id:   message._id,
        };
        editMessage(editedMessage);
        setIsEditing(false);
    };

    const cancelEditing = () => {
        setIsEditing(false);
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const enterPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            submitChanges();
        }
    };

    return (
        <S.Container align = { user?.username === message?.username }>
            <S.NameBlock>
                {
                    user?.username === message.username && (
                        <div>
                            <S.EditBlockButton onClick = { deleteMessageHandler }>Delete</S.EditBlockButton>
                            <S.EditBlockButton onClick = { editMessageHandler }>Edit</S.EditBlockButton>
                        </div>
                    )
                }
                <S.UserName align = { user?.username === message?.username }>{ message.username }</S.UserName>
            </S.NameBlock>
            { isEditing ? (
                <div>
                    <S.EditMessageField
                        autoFocus
                        defaultValue = { value }
                        type = 'text'
                        onChange = { onChangeInput }
                        onKeyUp = { (event) => enterPressHandler(event) }
                    />
                    <S.SubmitChangesBtn
                        onClick = { submitChanges }>UPDATE
                    </S.SubmitChangesBtn>
                    <S.DeclineChangesBtn
                        className = 'decline-changes-btn'
                        onClick = { cancelEditing }>CANCEL
                    </S.DeclineChangesBtn>
                </div>

            ) : <S.MessageText>{ message.text }</S.MessageText>}
            <S.MessageDate>
                <p>{ message.createdAt !== message.updatedAt ? 'EDITED' : null }</p>
                <p>{ moment(message.createdAt).format('HH:mm:ss') }</p>
            </S.MessageDate>
        </S.Container>
    );
};

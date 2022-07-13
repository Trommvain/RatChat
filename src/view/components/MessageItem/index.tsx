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


export const MessageItem: FC<Message> = (messages: Message) => {
    const { user } = useUser();
    const { deleteMessage, editMessage } = useMessages();
    const [ isEditing, setIsEditing ] = useState(false);
    const [ value, setValue ] = useState('');

    let editToggler = false;
    user?.username === messages.username ? editToggler = true : editToggler = false;

    const deleteMessageHandler = () => {
        if (confirm('Delete this message?')) {
            if (isEditing) {
                setIsEditing(false);
            }
            deleteMessage(messages._id);
        }
    };

    const editMessageHandler = () => {
        setIsEditing(true);
        setValue(messages.text);
    };

    const submitChanges = () => {
        const editedMessage = {
            text: value,
            id:   messages._id,
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
        <S.Container align = { user?.username === messages?.username }>
            <div className = 'name-block'>
                { editToggler && (
                    <div>
                        <span onClick = { deleteMessageHandler }>Delete</span>
                        <span onClick = { editMessageHandler }>Edit</span>
                    </div>
                )}
                <p className = 'name'>{ messages.username }</p>
            </div>
            { isEditing ? (
                <div>
                    <input
                        autoFocus
                        className = 'edit-message-field'
                        defaultValue = { value }
                        type = 'text'
                        onChange = { onChangeInput }
                        onKeyUp = { (event) => enterPressHandler(event) }
                    />
                    <button
                        className = 'submit-changes-btn'
                        onClick = { submitChanges }>UPDATE
                    </button>
                    <button
                        className = 'decline-changes-btn'
                        onClick = { cancelEditing }>CANCEL
                    </button>
                </div>

            ) : <p className = 'text'>{ messages.text }</p>}
            <div className = 'date'>
                <p>{ messages.createdAt !== messages.updatedAt ? 'EDITED' : null }</p>
                <p>{ moment(messages.createdAt).format('HH:mm:ss') }</p>
            </div>
        </S.Container>
    );
};

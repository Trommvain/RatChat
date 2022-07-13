// Core
import styled from 'styled-components';

export const Container = styled.section`
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    max-width: 400px;
    max-height: 700px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 92% 8%;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

    .messages-block {
        overflow-y: auto;
        display: flex;
        flex-direction: column-reverse;
    }

    .input-message-block {
        display: grid;
        grid-template-columns: 80% 20%;
    }

    .input-field {
        width: 100%;
        height: 2rem;
        font-size: 1rem;
        font-weight: 400;
        cursor: text;
        display: inline-flex;
        align-items: center;
        background-color: inherit;
        border-style: none none solid none;

        &:focus {
            outline: none;
            background-color: inherit;
            border-color: blue;
            transition: 0.5s;
        }
    }

    .send-message-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        background-color: transparent;
        outline: 0px;
        border: 0px;
        margin: 0px;
        cursor: pointer;
        user-select: none;
        vertical-align: middle;
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.75;
        min-width: 64px;
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

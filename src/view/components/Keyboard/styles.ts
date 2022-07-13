import styled from 'styled-components';

export const Container = styled.div`
        display: grid;
        grid: 1fr 1fr 1fr 1fr / 1fr;
        width: 40vw;
        max-width: 500px;
        min-width: 400px;
        background-color: transparent;

        span {
                display: flex;
                background-color: white;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                border: 2px solid black;
                border-radius: 3px;
                cursor: pointer;
                user-select: none;

            &:hover {
                background-color: lightgray;
            }

            &:active {
                background-color: black;
                color: white;
            }
    }
`;

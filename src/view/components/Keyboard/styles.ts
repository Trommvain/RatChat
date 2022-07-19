import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid: 1fr 1fr 1fr 1fr / 1fr;
    width: 40vw;
    max-width: 500px;
    min-width: 400px;
    background-color: transparent;

    @media only screen and (max-width: 400px) {
        width: 90vw;
        min-width: 50vw;
    }
`;

export const FirstSecondRow = styled.div`
    display: grid;
    grid: 1.5rem / repeat(10, 1fr);
    align-content: center;
`;

export const ThirdRow = styled.div`
    display: grid;
    grid: 1.5rem / repeat(9, 1fr);
    align-content: center;
`;

export const FourthRow = styled.div`
    display: grid;
    grid: 1.5rem / repeat(8, 1fr) 2fr;
    align-content: center;
`;

export const LastRow = styled.div`
    display: grid;
    grid: 1.5rem / 1fr 1fr 3fr 1fr 1fr;
    align-content: center;
`;

export const Key = styled.span`
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
`;

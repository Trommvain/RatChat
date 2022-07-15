// Core
import styled from 'styled-components';
import bgImage from '../../../assets/images/chatBg.jpg';

export const Container = styled.section`
    display: grid;
    grid-template-rows: 7% 64% 6% 23%;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url('${bgImage}');
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
`;

export const WelcomeSign = styled.p`
    font-size: 24px;
    color: white;
`;

export const LogoutBtn = styled.button`
    display: block;
    height: fit-content;
    width: fit-content;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin: 0 20px;

    &:hover {
        background-color: white;
        color: black;
        transition: 0.5s;
    }

    &:active {
        filter: invert();
        transition: none;
    }
`;

export const ShowKeyboardBtn = styled.button`
    align-self: flex-end;
    height: fit-content;
    width: fit-content;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    border-color: transparent;
    background-color: blue;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        transition: 0.5s;
    }

    &:active {
        filter: invert();
        transition: none;
    }
`;

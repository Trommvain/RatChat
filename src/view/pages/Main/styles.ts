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

    header {
        display: flex;
        align-items: center;
    }

    .welcome {
        font-size: 24px;
        color: white;
    }

    .btn-logout {
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
    }

`;

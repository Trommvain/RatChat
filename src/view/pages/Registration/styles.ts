// Core
import styled from 'styled-components';
import bgImage from '../../../assets/images/rat.jpg';

export const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url('${bgImage}');
    background-repeat: no-repeat;
    background-position: 45% 50%;
    background-size: contain;
    font-family: Arial, Helvetica, sans-serif;
`;

export const RegistrationForm = styled.form`
    display: inline-block;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

export const UserName = styled.label`
    display: block;
    font-size: 18px;
    color: white;
    margin: 10px 0;
`;

export const SubmitBtn = styled.button`
    display: block;
    width: 176px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: black;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    margin-top: 10px;

    &:hover {
        color: black;
        background-color: lightgreen;
        transition: none;
        transform: scale(1.1);
    }

    &:active {
        background-color: darkgreen;
    }
`;

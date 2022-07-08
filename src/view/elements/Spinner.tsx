// Core
import React from 'react';
import styled from 'styled-components';
import spinner from '../../assets/images/spinner.gif';

// Styles
const SpinnerStyle = styled.div`
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background: rgba(0,0,0,0.75) url('${spinner}') no-repeat center center;
        background-size: 5%;
        z-index: 10000;
`;

export const Spinner = () => {
    return <SpinnerStyle></SpinnerStyle>;
};

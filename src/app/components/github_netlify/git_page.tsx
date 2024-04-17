import { GlobalStylesInstance } from '@/DATA/settings/Global';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface PropDetails {
    text: string;
}


const Button = styled.button`
    padding: 5px 10px;
    margin: 7px 15px;
    background-color: ${ GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX };
    color: white;
`;

const Git_Net = function Git_Net({ text }: PropDetails) {
    const info: boolean =true;

    return (
        <Button >{text}</Button>
    );
};

export default Git_Net;

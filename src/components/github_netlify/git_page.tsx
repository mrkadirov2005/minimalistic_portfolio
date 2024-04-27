import React from 'react';
import styled from 'styled-components';

interface PropDetails {
    text: string;
}


const Button = styled.button`
    padding: 5px 10px;
    margin: 7px 15px;
    color: black;
`;

const Git_Net = function Git_Net({ text }: PropDetails) {
    const info: boolean =true;

    return (
        <Button >{text}</Button>
    );
};

export default Git_Net;

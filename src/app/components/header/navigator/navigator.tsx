import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  linkId: string;
  text: string;
}


const Button = styled.button` 
  background-color: white;
  text-transform: uppercase;
  border: none;
  color: ${ 'black' };
  padding: 5px 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export default function Navigator({ linkId, text }: Props) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(linkId)}>
      {text}
    </Button>
  );
}

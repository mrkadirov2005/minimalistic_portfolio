import { background } from '@/app/Reducers/selector';
import { set_page } from '@/app/Reducers/slices';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  linkId: string;
  text: string;
}

interface LocalProps {
  background: boolean;
}

const Button = styled.button<LocalProps>` 
  background-color: transparent;
  text-transform: uppercase;
  border: none;
  color: ${props => props.background ? 'white' : 'black'};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export default function Navigator({ linkId, text }: Props) {
  const info = useSelector(background);
  const navigate = useNavigate();

  return (
    <Button background={info} onClick={() => navigate(linkId)}>
      {text}
    </Button>
  );
}

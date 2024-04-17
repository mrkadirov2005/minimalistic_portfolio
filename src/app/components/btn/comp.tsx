import React from 'react';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  text: string;
  page: string;
}


const Button = styled.div`
  background-color: ${GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX };
  width: 176px;
  height: 48px;
  border: 2px solid grey;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color:  black;
  cursor: pointer;
`;

export default function ButtonComp({ text, page }: Props) {
  const navigate = useNavigate();

  return (
    <Button  onClick={() => navigate('contact')}>
      {text}
    </Button>
  );
}

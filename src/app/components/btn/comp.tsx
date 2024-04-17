import React from 'react';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { background } from '@/app/Reducers/selector';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  text: string;
  page: string;
}

interface LocalProps {
  backgroundIn: boolean;
}

const Button = styled.div<LocalProps>`
  background-color: ${(props) =>
    props.backgroundIn
      ? GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX
      : GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
  width: 176px;
  height: 48px;
  border: 2px solid grey;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.backgroundIn ? 'black' : 'black')};
  cursor: pointer;
`;

export default function ButtonComp({ text, page }: Props) {
  const backgroundIn: boolean = useSelector(background);
  const navigate = useNavigate();

  return (
    <Button backgroundIn={backgroundIn} onClick={() => navigate('contact')}>
      {text}
    </Button>
  );
}

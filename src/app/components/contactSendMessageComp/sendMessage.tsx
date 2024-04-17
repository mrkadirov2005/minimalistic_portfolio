import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { background } from '@/app/Reducers/selector';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface LocalProps {
  info: boolean;
}

const Button = styled.button<LocalProps>`
  margin: 15px 0px;
  width: 200px;
  height: 48px;
  background-color: ${(props) =>
    props.info ? GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX : GlobalStylesInstance._colors.primary.DarkBlue.HEX};
  color: ${(props) =>
    props.info ? GlobalStylesInstance._colors.primary.DarkBlue.HEX : GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.info ? GlobalStylesInstance._colors.primary.DarkBlue.HEX : GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX};
    color: ${(props) =>
      props.info ? GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX : GlobalStylesInstance._colors.primary.DarkBlue.HEX};
  }
`;

export default function SendMessage() {
  const info: boolean = useSelector(background);

  return (
    <Button info={info} type='submit'>
      Send Message
    </Button>
  );
}

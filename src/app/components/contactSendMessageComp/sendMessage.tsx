import { GlobalStylesInstance } from '@/DATA/settings/Global';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const Button = styled.button`
  margin: 15px 0px;
  width: 200px;
  height: 48px;
  background-color: ${GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX};
  color: ${GlobalStylesInstance._colors.primary.DarkBlue.HEX};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${ GlobalStylesInstance._colors.primary.DarkBlue.HEX};
    color: ${GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX};
  }
`;

export default function SendMessage() {
  const info: boolean = true

  return (
    <Button  type='submit'>
      Send Message
    </Button>
  );
}

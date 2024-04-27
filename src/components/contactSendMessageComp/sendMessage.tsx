import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const Button = styled.button`
  margin: 15px 0px;
  width: 200px;
  height: 48px;
  border: none;
  cursor: pointer;
`;

export default function SendMessage() {
  const info: boolean = true

  return (
    <Button  type='submit'>
      Send Message
    </Button>
  );
}

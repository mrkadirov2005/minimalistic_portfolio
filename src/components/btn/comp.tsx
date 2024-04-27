import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  text: string;
  page: string;
}


const Button = styled.div`
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

  return (
    <Link style={{color: "white",textDecoration:"none",fontSize:25}} href={`${page}`}>{text}</Link>
  );
}

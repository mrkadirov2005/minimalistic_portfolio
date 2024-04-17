import React, { ChangeEvent } from 'react';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { useDispatch, useSelector } from 'react-redux';
import { set_background } from '@/app/Reducers/slices';
import Styles from '../header/page.module.css';
import { background } from '@/app/Reducers/selector';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Switcher = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function BasicSwitches() {
  const backgroundIn: boolean = useSelector(background);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.checked ? 'black' : 'white';
    GlobalStylesInstance.CurrentColor = newColor;
    dispatch(set_background(event.target.checked));
  };

  return (
    <Switcher className={Styles.switcher} id='switcher'>
      <Switch checked={backgroundIn} {...label} onChange={handleChange} /> {backgroundIn ? '☀️' : '🌛'}
    </Switcher>
  );
}

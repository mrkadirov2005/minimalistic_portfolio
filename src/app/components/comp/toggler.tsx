import React, { useState, ChangeEvent, useContext } from 'react';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { useDispatch, useSelector } from 'react-redux';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { set_page, set_background } from '@/app/Reducers/slices';
import { Basics } from '@/app/Reducers/reducers';

export default function BasicSwitches() {

const info=useSelector(Basics)
const dispatch=useDispatch()

   const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
     GlobalStylesInstance.CurrentColor=`${event.target.checked==true?"black":"white"}`
     return dispatch(set_background(!info.basics.background))

   }
  //  handleChange()
const Switcher=styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
    
  return (
    <Switcher className='switcher'>
      {/* <Switch {...label} defaultChecked /> */}
      <Switch checked={info.basics.background==true?true:false}  {...label} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleChange(event)} /> {info.basics.background==true?"☀️":"🌛"}
      {/* <Switch {...label} disabled defaultChecked /> */}
      {/* <Switch {...label} disabled /> */}
    </Switcher>
  );
}
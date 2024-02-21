import React, { ChangeEvent } from 'react';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { useDispatch, useSelector } from 'react-redux';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import {  set_background } from '@/app/Reducers/slices';
import Styles from '../header/page.module.css'
import { background } from '@/app/Reducers/selector';
const Switcher=styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
 
export default function BasicSwitches() {
const backgroundIn:boolean=useSelector(background)
const dispatch=useDispatch()

   const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
     GlobalStylesInstance.CurrentColor=`${event.target.checked==true?"black":"white"}`
     return dispatch(set_background(!backgroundIn))

   }
  //  handleChange()

    
  return (
    <Switcher className={Styles.switcher} id='switcher'>
      {/* <Switch {...label} defaultChecked /> */}
      <Switch checked={backgroundIn==true?true:false}  {...label} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleChange(event)} /> {backgroundIn==true?"☀️":"🌛"}
      {/* <Switch {...label} disabled defaultChecked /> */}
      {/* <Switch {...label} disabled /> */}
    </Switcher>
  );
}
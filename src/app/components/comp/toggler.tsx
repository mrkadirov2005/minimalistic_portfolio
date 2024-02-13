import React, { useState, ChangeEvent, useContext } from 'react';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { InfoContext } from '@/app/Layout/page';
const label = { inputProps: { 'aria-label': 'Switch demo' } };



export default function BasicSwitches() {

  const info =useContext(InfoContext)

   const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    info.tools.dispatch({type:"set_background",payload:!info.tools.state.background})
    GlobalStylesInstance.CurrentColor=`${event.target.checked==true?"black":"white"}`

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
      <Switch checked={info.tools.state.background==true?true:false}  {...label} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleChange(event)} /> {info.tools.state.background==true?"☀️":"🌛"}
      {/* <Switch {...label} disabled defaultChecked /> */}
      {/* <Switch {...label} disabled /> */}
    </Switcher>
  );
}
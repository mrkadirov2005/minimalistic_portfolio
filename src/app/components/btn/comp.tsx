import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import React, { Children, useContext } from 'react'
import styled from 'styled-components'

interface PROPS{
    text:string,
    page:string
}
export default function ButtonComp({text:text,page:page}:PROPS) {
    const info=useContext(InfoContext)
    const background=info.tools.state.background
    const Button=styled.div`
    background-color: ${background==true?GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX:GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
    width:176px;
    height:48px;
    border: 2px solid grey;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${background==true?"black":"black"};
    cursor: pointer;
    `
  return (
    <Button  onClick={()=>info.tools.dispatch({type:"set_page",payload:page})}>
 {text}
    </Button>
  )
}

import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { Basics } from '@/app/Reducers/reducers'
import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

interface PROPS{
    text:string,
    page:string
}
export default function ButtonComp({text:text,page:page}:PROPS) {
    const info=useSelector(Basics)
    const dispatch=useDispatch()
    const background=info.basics.background


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
    <Button  onClick={()=>dispatch({type:"set_page",payload:page})}>
 {text}
    </Button>
  )
}

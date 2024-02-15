import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { Basics } from '@/app/Reducers/reducers'
import React  from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

interface PROPS{
    text:string
}
export default function Git_Net({text:text}:PROPS) {
    const info=useSelector(Basics)
const background=info.basics.background
    const Button=styled.button`
        padding: 5px 10px;
        margin: 7px 15px;
        background-color:${background?GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX} ;
        color: white;

    `
  return (
    <Button>{text}</Button>
  )
}

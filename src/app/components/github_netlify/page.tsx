import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import React, { useContext } from 'react'
import styled from 'styled-components'

interface PROPS{
    text:string
}
export default function Git_Net({text:text}:PROPS) {
    const info=useContext(InfoContext)
const background=info.tools.state.background
    const Button=styled.button`
        padding: 2px;
        margin: 7px 0px;
        background-color:${background?GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX} ;
    `
  return (
    <Button>{text}</Button>
  )
}

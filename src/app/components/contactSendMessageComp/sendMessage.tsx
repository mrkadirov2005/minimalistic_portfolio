import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { Basics } from '@/app/Reducers/reducers'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Button=styled.button`
margin: 15px 0px;

width: 200px;
height: 48px;
background-color: ${(props)=>props.background==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG};
color: ${(props)=>props.background==false? GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX};

&:hover{
background-color: ${(props)=>props.background==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG};

color: ${(props)=>props.background==false?GlobalStylesInstance._colors.secondary.veryLightGrey_BG:GlobalStylesInstance._colors.primary.DarkBlue.HEX}
}
`

export default function SendMessage() {

     const info=useSelector(Basics)
const background=info.basics.background
   
  return (
    <Button background={background} type='submit' >
        Send message
    </Button>
    
  )
}

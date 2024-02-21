import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { background } from '@/app/Reducers/selector'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Button=styled.button`
margin: 15px 0px;

width: 200px;
height: 48px;
background-color: ${(props)=>props.info==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG};
color: ${(props)=>props.info==false? GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX};

&:hover{
background-color: ${(props)=>props.info==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG};

color: ${(props)=>props.info ==false?GlobalStylesInstance._colors.secondary.veryLightGrey_BG:GlobalStylesInstance._colors.primary.DarkBlue.HEX}
}
`

export default function SendMessage() {

     const info:boolean=useSelector(background)
    
   
  return (
    <Button info={info} type='submit' >
        Send message
    </Button>
    
  )
}

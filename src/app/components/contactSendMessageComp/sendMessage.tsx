import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import React, { useContext } from 'react'
import styled from 'styled-components'

export default function SendMessage() {

     const info=useContext(InfoContext)

    const Button=styled.button`
    margin: 15px 0px;

    width: 200px;
    height: 48px;
    background-color: ${info.background==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG};
    color: ${info.background==false? GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX};
    
    &:hover{
    background-color: ${info.background==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG};

    color: ${info.background==false?GlobalStylesInstance._colors.secondary.veryLightGrey_BG:GlobalStylesInstance._colors.primary.DarkBlue.HEX}
    }
    `
  return (
    <Button type='submit' >
        Send message
    </Button>
    
  )
}

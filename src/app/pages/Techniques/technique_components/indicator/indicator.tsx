import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import { Basics } from '@/app/Reducers/reducers'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
interface PROPS{
    
}
interface PROPS{
    percent:number,
    type:string

}
export default function Indicator ({type:type,percent:percent}:PROPS) {

    const info=useSelector(Basics)
    const background=info.basics.background
const Illustrator=styled.div`
    background-color: ${background==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX};
    width: 100%;
    height: 25px;

`
const Filler=styled.div`
    width: ${percent}%;
    background-color:${background==false?"darkblue":"green"};
    height: 25px;
    color: ${GlobalStylesInstance._p.dark.color};
    font-size: 15px;
    display: flex;
    align-items: center;
`
    return (
    <Illustrator title={type}>
      <Filler>{type}</Filler>  
    </Illustrator>
  )
}

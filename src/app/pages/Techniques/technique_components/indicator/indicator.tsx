import { GlobalStylesInstance } from '@/DATA/settings/Global'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
interface LocalProps{
    bc:boolean;
    percent?:number;
}

interface PROPS{
    percent:number,
    type:string

}

const Illustrator=styled.div<LocalProps>`
    background-color: ${(props)=>props.bc==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX};
    width: 100%;
    height: 25px;

`
const Filler=styled.div<LocalProps>`
    width: ${(props)=>props.percent}%;
    background-color:${(props)=>props.bc==false?"darkblue":"green"};
    height: 25px;
    color: ${GlobalStylesInstance._p.dark.color};
    font-size: 15px;
    display: flex;
    align-items: center;
`
export default function Indicator ({type:type,percent:percent}:PROPS) {

    const bc=true
    const percentage=percent

    return (
    <Illustrator bc={bc} title={type}>
      <Filler percent={percentage} bc={bc} title={`${percent}`}>  {type}</Filler>  
    </Illustrator>
  )
}

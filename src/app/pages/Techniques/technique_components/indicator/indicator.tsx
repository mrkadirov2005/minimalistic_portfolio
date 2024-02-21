import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { Basics } from '@/app/Reducers/reducers'
import { background } from '@/app/Reducers/selector'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
interface PROPS{
    
}
interface PROPS{
    percent:number,
    type:string

}

const Illustrator=styled.div`
    background-color: ${(props)=>props.bc==false?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX};
    width: 100%;
    height: 25px;

`
const Filler=styled.div`
    width: ${(props)=>props.percent}%;
    background-color:${(props)=>props.bc==false?"darkblue":"green"};
    height: 25px;
    color: ${GlobalStylesInstance._p.dark.color};
    font-size: 15px;
    display: flex;
    align-items: center;
`
export default function Indicator ({type:type,percent:percent}:PROPS) {

    const bc=useSelector(background)
    const percentage=percent

    return (
    <Illustrator bc={bc} title={type}>
      <Filler percent={percentage} bc={bc} title={`${percent}`}>  {type}</Filler>  
    </Illustrator>
  )
}

import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { background } from '@/app/Reducers/selector'
import React  from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

interface propDetails{
    text:string
}
interface LocalProps{
  info:boolean;
}
const Button=styled.button<LocalProps>`
        padding: 5px 10px;
        margin: 7px 15px;
        background-color:${(props)=>props.info?GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX} ;
        color: white;

    `

 const Git_Net= function Git_Net({text:string}:propDetails) {
    const info:boolean=useSelector(background)
    
  return (
    <Button info={info}>{string}</Button>
  )
}
export default Git_Net
 
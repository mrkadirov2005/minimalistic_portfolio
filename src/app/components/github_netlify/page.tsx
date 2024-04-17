import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { Basics } from '@/app/Reducers/reducers'
import { background } from '@/app/Reducers/selector'
import React  from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

interface PROPS{
    text:string
}

const Button=styled.button`
        padding: 5px 10px;
        margin: 7px 15px;
        background-color:${(props)=>props.info?GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX} ;
        color: white;

    `

 function Git_Net({text:text}:PROPS) {
    const info:boolean=useSelector(background)
    
  return (
    <Button info={info}>{text}</Button>
  )
}
export default Git_Net
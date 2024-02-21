
import { background } from '@/app/Reducers/selector'
import { set_page } from '@/app/Reducers/slices'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface PROPS{
    linkId:string,
    text:string
}
const Button=styled.button` 
background-color: transparent;
text-transform: uppercase;
border: none;
color: ${props=>props.background?'white':'black'};
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
`
export default function Navigator({linkId,text}:PROPS) {
    const info=useSelector(background)
    const navigate=useNavigate()
    // const navigate=useNavigate()
    // const handleNavigator=(txt:string)=>{
    //     return navigate(`${txt}`)
    // }
  return (
    <Button background={info} onClick={()=>navigate(linkId)}>{text}</Button>
  )
}

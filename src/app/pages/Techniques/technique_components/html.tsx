import { GlobalStylesInstance } from '@/DATA/settings/Global'
import React from 'react'
import styled from 'styled-components'
import Indicator from './indicator/indicator'

interface PROPS{
  type:string,
  percent:number
}
export default function Content({type:type,percent:percent}:PROPS) {
    const HTML=styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    border: 2px solid grey;
    width: 99%;
    &:hover{
      background-color: #07637a;
    }
    `
  return (
    <HTML title={type}>
        <h3 style={GlobalStylesInstance._H3}>{type}</h3>
        <Indicator  percent={percent}  type={type}/>

    </HTML>
  )
}

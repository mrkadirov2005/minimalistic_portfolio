import React from 'react'
import styled from 'styled-components'
import Indicator from './indicator/indicator'

interface PROPS{
  type:string,
  percent:number
}
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
@media (max-width:800px){
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}
`
export default function Content({type:type,percent:percent}:PROPS) {
 
  return (
    <HTML title={type}>
        <h3 >{type}</h3>
        <Indicator  percent={percent}  type={type}/>

    </HTML>
  )
}

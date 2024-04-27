import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
interface LocalProps{
    percent:number;
}

interface PROPS{
    percent:number,
    type:string

}

const Illustrator=styled.div`
    width: 100%;
    height: 25px;

`
const Filler=styled.div<LocalProps>`
    width: ${(props)=>props.percent}%;
    background-color:green;
    height: 25px;
    font-size: 15px;
    display: flex;
    align-items: center;
`
export default function Indicator ({type:type,percent:percent}:PROPS) {

  
    const percentage=percent

    return (
    <Illustrator title={type}>
      <Filler percent={percentage}  title={`${percent}`}>  {type}</Filler>  
    </Illustrator>
  )
}

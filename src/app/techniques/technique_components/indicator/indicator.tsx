import React from 'react'
import styled from 'styled-components'
import "./styles.css";
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
    <Illustrator className='filler'  title={type}>
      <Filler className='inner_filler'  percent={percentage}  title={`${percent}`}>  {type}</Filler>  
    </Illustrator>
  )
}

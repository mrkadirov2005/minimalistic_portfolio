import React from 'react'
import styled from 'styled-components'

interface PROPS{
    languages:string[]

}
const LanguagesContainer=styled.ol`
display: flex;
align-items: center;
justify-content: space-around;
width:80%;
border: 2px solid grey;
`
export default function Languages({languages:languages}:PROPS) {
 
  return (
    <LanguagesContainer>
        {languages.map(item=><li key={item}>
         {item}
        </li>)}
    </LanguagesContainer>
  )
}

import React from 'react'
import styled from 'styled-components'

interface PROPS{
    languages:string[]

}
export default function Languages({languages:languages}:PROPS) {
    const LanguagesContainer=styled.ol`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        border: 2px solid grey;
    `
  return (
    <LanguagesContainer>
        {languages.map(item=><li key={item}>
         {item}
        </li>)}
    </LanguagesContainer>
  )
}

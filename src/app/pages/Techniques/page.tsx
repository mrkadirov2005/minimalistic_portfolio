"use client"
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import React from 'react'
import styled from 'styled-components'
import Content from './technique_components/html'
import Styles from "./Styles.module.css"
import { useSelector } from 'react-redux'
import { background, data } from '@/app/Reducers/selector'
  const TechniqueWrapper=styled.section`
    color:${(props)=>props.bc==false?GlobalStylesInstance._p.light.color:GlobalStylesInstance._p.dark.color} ;
    
  `

   const Languages_container_div=styled.div`
   color:${(props)=>props.bc==false?GlobalStylesInstance._p.light.color:GlobalStylesInstance._p.dark.color} ;
 `

const H3=styled.h3`
  @media (max-width:800px){
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`
const H1=styled.h1`
   width: 80%;
    margin-left: auto;
    margin-right: auto;
`
export default function TechniquesPage() {
  const bc=useSelector(background)
  

  return (
  
    <TechniqueWrapper bc={bc}>
      <H1 style={GlobalStylesInstance._H2}>
        Welcome to the techniques part of my portfolio.
      </H1>
      <Languages_container_div bc={bc} className={Styles.languages_container}>
      <H3 style={GlobalStylesInstance.H3}>Languages:</H3>
      <Content type='Uzbek' percent={85}/>
      <Content type='English' percent={77.7}/>
      </Languages_container_div>

      <H3 style={GlobalStylesInstance._H3} className={Styles.skills}> Skills</H3>

     <div className={Styles.content_container}>
       
        <Content type='HTML' percent={85}/>
        <Content type='CSS' percent={80}/>
        <Content type='JavaScript' percent={55}/>
        <Content type='TypeScript' percent={65}/>
        <Content type='React' percent={78}/>
        <Content type='Redux TK' percent={65}/>
        <Content type='Tailwind CSS' percent={50}/>
        <Content type='CSS Modules' percent={70}/>
        <Content type='styled components' percent={78}/>
        <Content type='NextJs' percent={40}/>
        <Content type='Python' percent={40}/>
     </div>

      {/* <h3 style={GlobalStylesInstance.H3}>Programming skils</h3> */}

     
    </TechniqueWrapper>
  )
}

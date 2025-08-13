"use client"
import React from 'react'
import styled from 'styled-components'
import Content from './technique_components/html'
import Styles from "./Styles.module.css"



  const TechniqueWrapper=styled.section`
    width: 70%;
    
  `

   const Languages_container_div=styled.div`
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
  
  

  return (
  
    <TechniqueWrapper >
      <H1 >
        Welcome to the techniques part of my portfolio.
      </H1>
      <Languages_container_div className={Styles.languages_container}>
      <H3>Languages:</H3>
      <Content type='Uzbek' percent={85}/>
      <Content type='English' percent={77.7}/>
      </Languages_container_div>

      <H3 className={Styles.skills}> Skills</H3>

     <div className={Styles.content_container}>
       <h1>Programming Languages</h1>
        <Content type='JavaScript' percent={55}/>
        <Content type='TypeScript' percent={55}/>
        <Content type='Python' percent={50}/>
        <Content type='C' percent={30}/>
        <Content type='VBA' percent={40}/>
        <h1>Front_end_techniques</h1>
        <Content type='HTML' percent={85}/>
        <Content type='CSS' percent={80}/>
        <Content type='CSS Modules' percent={70}/>
        <Content type='Tailwind CSS' percent={78}/>
        <Content type='React' percent={78}/>
        <Content type='NextJs' percent={40}/>
        <Content type='styled components' percent={78}/>
        <Content type='Vite' percent={40}/>
        <Content type='Redux TK' percent={65}/>
        <Content type='MUI' percent={80}/>
        <h1>Backend_techniques</h1>
        <Content type='NodeJS' percent={40}/>
        <Content type='ExpressJS' percent={40}/>
        {/* adding second course skills at the university */}
        <h1>Databases</h1>
        <Content type='SQL:MYSQL' percent={50}/>
        <Content type='NOSQL:MongoDB' percent={50}/>

     </div>


     
    </TechniqueWrapper>
  )
}

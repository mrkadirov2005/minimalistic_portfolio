"use client"
import React from 'react'
import styled from 'styled-components'
import ProjectComp from './ProjectsComp/main'


const ProjectPageWrapper=styled.div`
      width: 96%;
      margin-top:100px;
    `

export default function Projects() {
  
  
  
  return (
    
    <ProjectPageWrapper >
    <p >Here, you can find info about some of the projects I have done. </p>
    <ProjectComp/>
    </ProjectPageWrapper>
  )
}

"use client"
import React from 'react'
import styled from 'styled-components'
import ProjectComp from './ProjectsComp/main'


const ProjectPageWrapper=styled.div`
      width: 96%;
    `

export default function Projects() {
  
  
  
  return (
    
    <ProjectPageWrapper >
    <p >Here, you can find info about the projects I have done. The pages which support responsive screen have ®️®️®️ triple R symbol.</p>
    <ProjectComp/>
    </ProjectPageWrapper>
  )
}

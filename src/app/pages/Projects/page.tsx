"use client"
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import React from 'react'
import styled from 'styled-components'
import ProjectComp from './ProjectsComp/main'


const ProjectPageWrapper=styled.div`
      color:${GlobalStylesInstance._p.dark.color} ;
      width: 96%;
    `

export default function Projects() {
  
  
  
  return (
    
    <ProjectPageWrapper >
    <p style={GlobalStylesInstance._p.dark}>Here, you can find info about the projects I have done. The pages which support responsive screen have ®️®️®️ triple R symbol.</p>
    <ProjectComp/>
    </ProjectPageWrapper>
  )
}

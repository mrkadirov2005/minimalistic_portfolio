"use client"
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import React, { useContext } from 'react'
import styled from 'styled-components'
import ProjectComp from './ProjectsComp/main'
import { useSelector } from 'react-redux'
import { background } from '@/app/Reducers/selector'

const ProjectPageWrapper=styled.div`
      color:${(props)=>props.background==false?GlobalStylesInstance._p.light.color:GlobalStylesInstance._p.dark.color} ;
      width: 96%;
    `

export default function Projects() {
  const bc =useSelector(background)
  
  
  return (
    
    <ProjectPageWrapper background={bc}>
    <p style={bc==false?GlobalStylesInstance._p.light:GlobalStylesInstance._p.dark}>Here, you can find info about the projects I have done. The pages which support responsive screen have ®️®️®️ triple R symbol.</p>
    <ProjectComp/>
    </ProjectPageWrapper>
  )
}

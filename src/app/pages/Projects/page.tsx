import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import React, { useContext } from 'react'
import styled from 'styled-components'
import ProjectComp from './ProjectsComp/main'

export default function Projects() {
  const info =useContext(InfoContext)
  const background=info.tools.state.background
  const ProjectPageWrapper=styled.div`
      color:${background==false?GlobalStylesInstance._p.light.color:GlobalStylesInstance._p.dark.color} ;
      width: 96%;
    `
  return (
    
    <ProjectPageWrapper>
    <p style={background==false?GlobalStylesInstance._p.light:GlobalStylesInstance._p.dark}>Here, you can find info about the projects I have done. The pages which support responsive screen have ®️®️®️ triple R symbol.</p>
    <ProjectComp/>
    </ProjectPageWrapper>
  )
}

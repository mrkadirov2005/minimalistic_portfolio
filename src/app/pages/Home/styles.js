import styled from "styled-components"

export const ImgSectionHeading=styled.h1`
color:${(props)=>props.background==true?"white":"black" };
background-color: ${(props)=>props.colorSystem};
`
export const ProjectPart=styled.section`
color: ${(props)=>props.background==true?"white":"black"};
width: 40%;
`
export const ClickOn=styled.h3`
color:${(props)=>props.colorSystem}
`


import styled from "styled-components"
interface LocalProps{
    background: boolean;
    colorSystem?:string
  }
export const ImgSectionHeading=styled.h1<LocalProps>`
color:${(props)=>props.background==true?"white":"black" };
background-color: ${(props)=>props.colorSystem};
`
export const ProjectPart=styled.section<LocalProps>`
color: ${(props)=>props.background==true?"white":"black"};
width: 40%;
`
export const ClickOn=styled.h3<LocalProps>`
color:${(props)=>props.colorSystem}
`


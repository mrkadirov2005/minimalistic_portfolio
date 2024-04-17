import { GlobalStylesInstance } from "../../../../DATA/settings/Global"
import Languages from "../../../components/Languages/main"
import styled from "styled-components"
import Features from "@/app/components/Features/main"
import Git_Net from "@/app/components/github_netlify/git_page"
import { useSelector } from "react-redux"
import Styles from "../styles.module.css"
import { background,data } from "@/app/Reducers/selector"

interface localProps{
   colors?:string;
}
const Container=styled.div<localProps>`
color: ${(props)=>props.colors};
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`
const Linker=styled.a<localProps>`
display: flex;
align-items: center;
justify-content: flex-start;
color:${(props)=>props.colors} ;
padding: 5px 0px;
text-decoration: none;
`
const Project=styled.div`
width: 40%;
border: 3px solid orange;
padding: 10px 20px;
margin: 10px;
&:hover{
transform: scale(1.02);
background-color: #07637a;
color: white;


}

`

const Github=styled.a`
color: white;
`
const Paragraph=styled.span<localProps>`
color: ${(props)=>props.colors};
padding: 15px 0px;
text-decoration: underline grey;
line-height: 4px;
letter-spacing: 5px;

`




export default function ProjectComp() {
   const bc=useSelector(background)

  const Projects=useSelector(data).data
  

const sortedArray=[]
var counter=Projects.length
while(counter>0){
   counter-=1
   const selected=Projects[counter]
   sortedArray.push(selected)

}
  

  const colors=bc?GlobalStylesInstance._p.dark.color:GlobalStylesInstance._p.light.color


 return (
    <Container colors={colors}>
       {sortedArray.map(project=>{
        return(<Project key={project.name} className={Styles.animated_project}>
            <h3>{project.name}</h3>
            <div className="date_details">
               <p>{project.title} | {project.date}</p>
            </div>
            <Linker colors={colors} href={project.Github} className="github_link">check out {project.name} code on <Github href={project.Github}> <Git_Net text="Github"/></Github></Linker>
            <article className="description">{project.info}</article>
            <Paragraph colors={colors} >languages</Paragraph>
            <Features details={project.details}/>
            <Languages languages={project.languages} />
           see preview on{project.netlify?<Linker className={Styles.linker} target="_blank" href={project.netlify}><Git_Net text="Netlify"/></Linker>:(project.vercel)?<Linker className={Styles.linker} target="_blank" href={project.vercel}><Git_Net text="Vercel"/></Linker>:""}
        </Project>)
       })}
    </Container>
 )
}

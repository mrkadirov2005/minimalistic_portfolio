import Languages from "../../../components/Languages/main";
import styled from "styled-components";
import Features from "@/components/Features/main";
import Git_Net from "@/components/github_netlify/git_page";
import Styles from "../styles.module.css";
import DataProjects from "./data"
import reorderArray from "./reorder"

interface Project {
  name: string;
  Github: string;
  netlify?: string;
  vercel?: string;
  title: string;
  info: string;
  date: string;
  languages: string[];
  details: {
    responsive: boolean;
    desktop: boolean;
    mobile: boolean;
    tablet: boolean;
  };
}



const Container = styled.div`
  color: ${"white"};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Linker = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${"white"};
  padding: 5px 0px;
  text-decoration: none;
`;

const ProjectBox = styled.div`
  width: 40%;
  border: 3px solid orange;
  padding: 10px 20px;
  margin: 10px;
  &:hover {
    transform: scale(1.02);
    background-color: #07637a;
    color: white;
  }
`;

const GithubLink = styled.a`
  color: white;
`;

const Paragraph = styled.span`
  color: ${"white"};
  padding: 15px 0px;
  text-decoration: underline grey;
  line-height: 4px;
  letter-spacing: 5px;
`;

export default function ProjectComp() {
  const projectsData = DataProjects as { data?: Project[] };
  


  const projects = projectsData.data || [];
  const reversed=reorderArray(projects)
  
  

  return (
    <Container >
      {reversed.map((project) => (
        <ProjectBox key={project.name} className={Styles.animated_project}>
          <h3>{project.name}</h3>
          <div className="date_details">
            <p>
              {project.title} | {project.date}
            </p>
          </div>
          <Linker  href={project.Github} className="github_link">
            check out {project.name} code on{" "}
            <GithubLink href={project.Github}>
              <Git_Net text="Github" />
            </GithubLink>
          </Linker>
          <article className="description">{project.info}</article>
          <Paragraph >Languages</Paragraph>
          <Features details={project.details} />
          <Languages languages={project.languages} />
          See preview on{" "}
          {project.netlify ? (
            <Linker
              className={Styles.linker}
              target="_blank"
              href={project.netlify}
            >
              <Git_Net text="Netlify" />
            </Linker>
          ) : project.vercel ? (
            <Linker
              className={Styles.linker}
              target="_blank"
              href={project.vercel}
            >
              <Git_Net text="Vercel" />
            </Linker>
          ) : (
            ""
          )}
        </ProjectBox>
      ))}
    </Container>
  );
}

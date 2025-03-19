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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 15px 20px;
  margin: 15px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px) scale(1.03);
    background: rgba(255, 255, 255, 0.2);
    border-color: orange;
    box-shadow: 0px 8px 20px rgba(255, 165, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`;

const GithubLink = styled.a`
  color: white;
`;

const Paragraph = styled.span`
  display: block;
  font-size: 1rem;
  color: white;
  margin-top: 10px;
  padding: 10px 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-bottom: 1px solid grey;
  width: fit-content;
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

"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Languages from "../../../components/Languages/main";
import Features from "@/components/Features/main";
import Git_Net from "@/components/github_netlify/git_page";
import Styles from "../styles.module.css";
import DataProjects from "./data";
import reorderArray from "./reorder";

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
  color: white;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 24px;
  padding: 2rem 0;
`;

const ProjectCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  border: 2px solid transparent;
  width: 420px;
  padding: 1.5rem 2rem;
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;
  transition: all 0.3s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-8px) scale(1.04);
    background: rgba(255, 255, 255, 0.25);
    border-color: orange;
    box-shadow: 0 12px 28px rgba(255, 165, 0, 0.6);
    outline: none;
  }

  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.2rem 1.4rem;
  }
`;

const ProjectHeader = styled.h3`
  font-size: 1.7rem;
  margin: 0 0 0.25rem 0;
  user-select: none;
`;

const DateInfo = styled.p`
  font-size: 0.9rem;
  color: #f0f0f0aa;
  margin: 0 0 1rem 0;
  font-weight: 500;
`;

const InfoText = styled.article`
  font-size: 1rem;
  color: #eee;
  margin-bottom: 1.2rem;
  min-height: 70px;
  user-select: text;
`;

const SectionTitle = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid #aaa;
  padding-bottom: 4px;
  margin-bottom: 0.8rem;
  color: #ddd;
  user-select: none;
`;

const LinkWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  margin-top: 12px;
  user-select: none;

  &:hover,
  &:focus {
    color: orange;
    outline: none;
  }
`;

const PreviewLink = styled(LinkWrapper)`
  margin-top: 16px;
  font-weight: 700;
  font-size: 1rem;
`;

const LanguagesWrapper = styled.div`
  margin-top: 1rem;
`;

const FeaturesWrapper = styled.div`
  margin-top: 0.5rem;
`;

export default function ProjectComp() {
  const projectsData = DataProjects as { data?: Project[] };
  const projects = projectsData.data || [];
  const reversed = reorderArray(projects);

  return (
    <Container>
      {reversed.map((project) => (
        <ProjectCard
          key={project.name}
          tabIndex={0}
          role="article"
          aria-label={`Project: ${project.name}, ${project.title}, developed using ${project.languages.join(
            ", "
          )}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={Styles.animated_project}
        >
          <ProjectHeader>{project.name}</ProjectHeader>
          <DateInfo>
            {project.title} | {project.date}
          </DateInfo>

          <LinkWrapper href={project.Github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} code on GitHub`}>
            Check out code on <Git_Net text="GitHub" />
          </LinkWrapper>

          <InfoText>{project.info}</InfoText>

          <SectionTitle>Languages</SectionTitle>
          <FeaturesWrapper>
            <Features details={project.details} />
          </FeaturesWrapper>

          <LanguagesWrapper>
            <Languages languages={project.languages} />
          </LanguagesWrapper>

          {(project.netlify || project.vercel) && (
            <PreviewLink
              href={project.netlify ?? project.vercel}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Preview project ${project.name} on ${project.netlify ? "Netlify" : "Vercel"}`}
              className={Styles.linker}
            >
              See preview on{" "}
              {project.netlify ? (
                <Git_Net text="Netlify" />
              ) : (
                <Git_Net text="Vercel" />
              )}
            </PreviewLink>
          )}
        </ProjectCard>
      ))}
    </Container>
  );
}

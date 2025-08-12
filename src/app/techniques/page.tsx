"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TechniqueWrapper = styled.section`
  width: 80%;
  max-width: 900px;
  margin: 3rem auto 5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const PageTitle = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2563eb;
  user-select: none;
`;

const CategoryContainer = styled.div`
  margin-bottom: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 18px rgb(37 99 235 / 0.15);
  background: #f9fafb;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    box-shadow: 0 8px 18px rgb(37 99 235 / 0.3);
  }
`;

const CategoryHeader = styled.div`
  background-color: #2563eb;
  color: white;
  padding: 1rem 1.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
  user-select: none;
  transition: transform 0.3s ease;
`;

const SkillsList = styled(motion.div)`
  padding: 1rem 1.5rem;
  background-color: white;
  color: #334155;

  @media (prefers-color-scheme: dark) {
    background-color: #0f172a;
    color: #cbd5e1;
  }
`;

const SkillRow = styled.div`
  margin-bottom: 1rem;
  user-select: none;
`;

const SkillLabel = styled.span`
  display: inline-block;
  font-weight: 600;
  margin-bottom: 4px;
`;

const BarBackground = styled.div`
  background-color: #e2e8f0;
  border-radius: 20px;
  height: 14px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #334155;
  }
`;

const BarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #60a5fa);
  border-radius: 20px 0 0 20px;
`;

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Uzbek", percent: 85 },
      { name: "English", percent: 77.7 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", percent: 55 },
      { name: "TypeScript", percent: 55 },
      { name: "Python", percent: 50 },
      { name: "C", percent: 30 },
      { name: "VBA", percent: 40 },
    ],
  },
  {
    category: "Front-end Techniques",
    skills: [
      { name: "HTML", percent: 85 },
      { name: "CSS", percent: 80 },
      { name: "CSS Modules", percent: 70 },
      { name: "Tailwind CSS", percent: 78 },
      { name: "React", percent: 78 },
      { name: "Next.js", percent: 40 },
      { name: "Styled Components", percent: 78 },
      { name: "Vite", percent: 40 },
      { name: "Redux TK", percent: 65 },
      { name: "MUI", percent: 80 },
    ],
  },
  {
    category: "Backend Techniques",
    skills: [
      { name: "Node.js", percent: 40 },
      { name: "Express.js", percent: 40 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL: MySQL", percent: 50 },
      { name: "NoSQL: MongoDB", percent: 50 },
    ],
  },
];

export default function TechniquesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Languages");

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <TechniqueWrapper>
      <PageTitle
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to the techniques part of my portfolio.
      </PageTitle>

      {skillsData.map(({ category, skills }) => (
        <CategoryContainer key={category}>
          <CategoryHeader onClick={() => toggleCategory(category)} role="button" tabIndex={0} aria-expanded={expandedCategory === category}>
            {category}
            <ToggleIcon
              style={{
                transform: expandedCategory === category ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▼
            </ToggleIcon>
          </CategoryHeader>

          {expandedCategory === category && (
            <SkillsList
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {skills.map(({ name, percent }) => (
                <SkillRow key={name}>
                  <SkillLabel>{name}</SkillLabel>
                  <BarBackground>
                    <BarFill
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      aria-valuenow={percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      role="progressbar"
                      aria-label={`${name} skill proficiency: ${percent} percent`}
                    />
                  </BarBackground>
                </SkillRow>
              ))}
            </SkillsList>
          )}
        </CategoryContainer>
      ))}
    </TechniqueWrapper>
  );
}

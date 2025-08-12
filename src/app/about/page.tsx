"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 8px 2px #2563eb66; 
  } 
  50% {
    box-shadow: 0 0 16px 4px #2563ebaa;
  }
`;

const Container = styled(motion.section)`
  min-height: 90vh;
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.2);
  color: #0f172a;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(90deg, #2563eb, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
  margin: 0;
  user-select: none;
  text-align: center;
`;

const SubHeader = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: white;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background: linear-gradient(145deg, #2563eb22, #60a5fa22);
  border-radius: 18px;
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.15);
  backdrop-filter: blur(10px);
  width: 160px;
  height: 160px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition: transform 0.3s ease;
  color: white;
  font-weight: 700;
  user-select: none;
  text-align: center;

  &:hover {
    animation: ${glow} 2s ease-in-out infinite;
    transform: scale(1.1) translateY(-8px);
    color: #2563eb;
  }
`;

const Icon = styled.div`
  font-size: 3.2rem;
  margin-bottom: 0.6rem;
  user-select: none;
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  background-color: #2563eb;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  margin: 0 auto;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.5);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.8);
  }
`;

const floatingBg = keyframes`
  0%, 100% { transform: translateY(0) }
  50% { transform: translateY(10px) }
`;

const BackgroundCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: #2563eb33;
  filter: blur(90px);
  opacity: 0.7;
  animation: ${floatingBg} 6s ease-in-out infinite;
  pointer-events: none;

  &:nth-child(1) {
    width: 250px;
    height: 250px;
    top: -80px;
    left: -60px;
  }
  &:nth-child(2) {
    width: 320px;
    height: 320px;
    bottom: -120px;
    right: -100px;
    animation-delay: 3s;
  }
`;

export default function AboutMe() {
  return (
    <Container
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-label="About Me Section"
    >
      <BackgroundCircle />
      <BackgroundCircle />

      <Header>About Me</Header>
      <SubHeader>
        Hello! I&apos;m <b>Muzaffar</b>, a <b>20-year-old</b> software engineer based
        in <b>Uzbekistan</b> with a passion for building beautiful, scalable,
        and modern web applications using the latest technologies.
      </SubHeader>
      <SubHeader>
        Currently, I&apos;m pursuing a degree in IT at{" "}
        <b>Cambridge International University</b>, hold international IT
        certifications, and have a strong command of English (IELTS 7+).
      </SubHeader>
      <SubHeader>
        Specialized in full-stack development with expertise in{" "}
        <b>Next.js, React, TypeScript, Tailwind CSS, Node.js, Python, Telegram
        Bots</b>, and more.
      </SubHeader>

      <CardsContainer>
        {[
          { icon: "💻", label: "Software Engineer" },
          { icon: "🎓", label: "CIU Student" },
          { icon: "🗣️", label: "IELTS 7+" },
          { icon: "📜", label: "Certified IT Professional" },
          { icon: "⚛️", label: "Front-End Developer" },
          { icon: "🛠️", label: "Backend Developer" },
          { icon: "🌐", label: "Full Stack Engineer" },
        ].map(({ icon, label }) => (
          <Card
            key={label}
            whileHover={{ scale: 1.12, y: -10, boxShadow: "0 0 12px #2563ebbb" }}
            transition={{ type: "spring", stiffness: 300 }}
            tabIndex={0}
            role="button"
            aria-label={label}
          >
            <Icon aria-hidden="true">{icon}</Icon>
            {label}
          </Card>
        ))}
      </CardsContainer>

      <Link href="/techniques" passHref legacyBehavior>
        <ResumeButton
          whileHover={{ scale: 1.1, boxShadow: "0 0 18px #1e40af" }}
          whileTap={{ scale: 0.95 }}
          tabIndex={0}
          role="link"
          aria-label="View Resume"
        >
          View My Resume
        </ResumeButton>
      </Link>
    </Container>
  );
}

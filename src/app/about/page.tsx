"use client";
import React from "react";
import styled from "styled-components";
import Styles from "./AboutMe.module.css";
import Link from "next/link";
import "./animation.css";

const DescriptionContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid grey;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const EducationContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid grey;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export default function AboutMe() {

  const Description = () => {
    return (
      <DescriptionContainer className={Styles.description}>
        <div className={Styles.description_details}>
          <h1 className={Styles.heading}>About Me</h1>
          <p className={Styles.description_text}>
            Welcome to my portfolio page! I&apos;m Muzaffar, a <b>20-year-old</b> software engineer from <b>Uzbekistan</b>.
            I have a strong passion for web development, working with modern technologies like <b>Next.js, React, JS, TS, Tailwind CSS, Telegram bots, Node.js, and Python technologies</b>.
          </p>
          <p>
            Currently, I&apos;m a <b>second-year student at Cambridge International University</b>, majoring in IT.
            I&apos;m proficient in English with an <b>IELTS score of 7+</b> and hold <b>international IT certifications</b>.
          </p>
          <p>
            I specialize in <b>Full-stack web development</b>.  
            Want to know more? Check out my <Link href="/techniques" className={Styles.resume_link}>resume</Link>.
          </p>
        </div>
        <div className={Styles.description_image}>
          <h2 className="anime1">Software Engineer</h2>
          <h2 className="anime2">CIU Student</h2>
          <h2 className="anime3">IELTS 7+</h2>
          <h2 className="anime4">Certified IT Professional</h2>
          <h2 className="anime5">Front-End Developer</h2>
          <h2 className="anime6">Backend Developer</h2>
          <h2 className="anime7">Full Stack Engineer</h2>
        </div>
      </DescriptionContainer>
    );
  };

  return (
    <section className={Styles.AboutContainer}>
       <Description /> 
      
    </section>
  );
}

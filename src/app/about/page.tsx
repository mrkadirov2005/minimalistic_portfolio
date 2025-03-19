"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Styles from "./AboutMe.module.css";
import ChangeSectionBtn from "@/components/change_section/main";
import FirstSemester from "./Data/first_semester.";
import SecondSemester from "./Data/second_semester";
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
  const [section, setSection] = useState<number>(1);
  const [semester, setSemester] = useState<number>(1);

  const Description = () => {
    return (
      <DescriptionContainer className={Styles.description}>
        <div className={Styles.description_details}>
          <h1 className={Styles.heading}>About Me</h1>
          <p className={Styles.description_text}>
            Welcome to my portfolio page! I'm Muzaffar, a **20-year-old** software engineer from **Uzbekistan**.  
            I have a strong passion for web development, working with modern technologies like **Next.js, React, JS, TS, Tailwind CSS, telegram bots, Node js and Python technologies**, and more.
          </p>
          <p>
            Currently, I'm a **second-year student at Cambridge International University**, majoring in IT.  
            I'm proficient in English with an **IELTS score of 7+** and hold **international IT certifications**.
          </p>
          <p>
            I specialize in **Full-stack web**.  
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

  // const Education = () => {
  //   return (
  //     <EducationContainer>
  //       <div>
  //         <h2 className="course_indicator">University: Cambridge International University</h2>
  //         {semester === 1 ? <FirstSemester /> : <SecondSemester />}
  //         <div className={Styles.navigator}>
  //           {semester !== 1 && (
  //             <ChangeSectionBtn section_number={semester} update_section={setSemester} type="s-1" />
  //           )}
  //           {semester !== 2 && (
  //             <ChangeSectionBtn section_number={semester} update_section={setSemester} type="s+1" />
  //           )}
  //         </div>
  //       </div>
  //       <div className={Styles.university_img}></div>
  //     </EducationContainer>
  //   );
  // };

  return (
    <section className={Styles.AboutContainer}>
      {section === 1 ? <Description /> :""}
      <div className={Styles.section_navigator}>
        {/* {section > 1 && (
          <ChangeSectionBtn section_number={section} update_section={setSection} type="-" />
        )}
        {section !== 2 && (
          <ChangeSectionBtn section_number={section} update_section={setSection} type="+" />
        )} */}
      </div>
    </section>
  );
}

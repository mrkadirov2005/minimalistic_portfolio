"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Styles from "./AboutMe.module.css";
import ChangeSectionBtn from "@/components/change_section/main";
import First_semester from "./Data/first_semester.";
import Second_semester from "./Data/second_semester";
import Link from "next/link";
import './animation.css'

const DescriptionContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid grey;
  padding: 15px 0px;
  padding-bottom: 100px;
`;

const EducationContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid grey;
  padding: 15px 10px;
  margin: 15px 0px;
`;

export default function AboutMe() {
  const [section, setSection] = useState<number>(1);
  const [semester, setSemester] = useState<number>(1);

  
 


  const Description = () => {
    return (
      <DescriptionContainer className={Styles.description}>
        <div className={Styles.description_image}>
        <h1  className="anime1">A 19 year old Software Engineer</h1>
        <h1  className="anime2">A student of MU university</h1>
        <h1  className="anime3">Holder of IELTS 7+</h1>
        <h1  className="anime4">Holder of international IT certificates</h1>
        <h1  className="anime5">Front-end developer</h1>
        <h1  className="anime6">backend_developer</h1>
        <h1  className="anime7">full_stack</h1>
        </div>
        <div className={Styles.description_details}>
          <h1 className="Description_heading">About Me</h1>
          <p className={Styles.description_passage}>
            Welcome to my portfolio page. Your visit to the page makes me feel
            over the moon. This is the about page of my portfolio, and I am a
            single guy born in 2005. I live in Uzbekistan, in the province of
            Samarkand.
            <br />
            However, currently, I am a first-year student at (MU) Millat Umidi,
            international name is (CIU): Cambridge International University. I
            am majoring in IT sphere since I am mad about creating web pages and
            learning new and trending tools such as NextJs, React, JS, TS, and
            others.
            <br />I am proficient in English, and as a proof, I have got an
            IELTS band score of 7. For more info about me and the techniques I
            have the possibility of dealing with, click on the button 👇 below.
          </p>
          <Link href="techniques">resume</Link>
        </div>
      </DescriptionContainer>
    );
  };

  const Education = () => {
    return (
      <EducationContainer>
        <div>
          <span className="course_indicator">Course At: </span>
          <h1>Cambridge International University</h1>
          {semester == 1 ? (
            <First_semester />
          ) : semester == 2 ? (
            <Second_semester />
          ) : (
            ""
          )}
          <div className={Styles.navigator}>
            {semester !== 1 ? (
              <ChangeSectionBtn
                section_number={semester}
                update_section={setSemester}
                type="s-1"
              />
            ) : (
              ""
            )}
            {semester !== 2 ? (
              <ChangeSectionBtn
                section_number={semester}
                update_section={setSemester}
                type="s+1"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={Styles.university_img}></div>
      </EducationContainer>
    );
  };

  return (
    <section className={Styles.AboutContainer}>
      {section == 1 ? <Description /> : section == 2 ? <Education /> : ""}
      <div className={Styles.section_navigator}>
        {section > 1 ? (
          <ChangeSectionBtn
            section_number={section}
            update_section={setSection}
            type="-"
          />
        ) : (
          ""
        )}
        {section !== 2 ? (
          <ChangeSectionBtn
            section_number={section}
            update_section={setSection}
            type="+"
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

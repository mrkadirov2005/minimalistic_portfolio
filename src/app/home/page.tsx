"use client"
import React from 'react'
import Styles from "./home.module.css"
import ButtonComp from '@/components/btn/comp'
import {ClickOn, ImgSectionHeading, ProjectPart} from "./styles"
import Link from 'next/link'



export default function HomePage() {
  return (
    <div id="home_page" className={Styles.home}>
      <div className={Styles.img_section}>
        
        <div className="diologue_box">
        <ImgSectionHeading   className={Styles.Heading}>
            Hey, My name is Muzaffar and I am a front-end developer</ImgSectionHeading>
        </div>
      </div>
      <div className={Styles.about_me_page}>
        <div className={Styles.my_img}>
        </div>
        <div  className={Styles.my_desc}>
        <h1  className="about_me_text">About Me</h1>
        I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices, writing clean JavaScript, typesCript,React and the necessary tools for them such as Tailwind CSS, styled-components,react-route-dom and others. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I reside  in Tashkent, Uzbekistan, working remotely is much more prefered, however, offline working style can also be compatible. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
        <br />
        <Link href='projects'>Projects</Link>
        </div>
      </div>
      <section className={Styles.contact_me_section}>
        <ProjectPart className={Styles.interest_in_project}>Interested in doing a project with me?</ProjectPart>
        <ClickOn className={Styles.clickOn}   >click on contact me button</ClickOn>
        <ButtonComp text={"Contact Me"} page="contact"/>
        
      </section>
    </div>
  )
}

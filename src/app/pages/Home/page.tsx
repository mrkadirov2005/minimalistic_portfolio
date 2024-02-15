"use client"
import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import Styles from "@/app/pages/Home/home.module.css"
import ButtonComp from '@/app/components/btn/comp'
import { useSelector } from 'react-redux'
import { Basics } from '@/app/Reducers/reducers'

export default function HomePage() {
  const info=useSelector(Basics)
  const background=info.basics.background
  
  const colorSystem= background==true?GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX:GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX


  const ImgSectionHeading=styled.h1`
    color:${background==true?"white":"black" };
    background-color: ${colorSystem};
    /* backgroundColor:${background==true?GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX:GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan} */
  `
  const ProjectPart=styled.section`
  color: ${background==true?"white":"black"};
  width: 40%;
  `
  const ClickOn=styled.h3`
    color:${colorSystem}
  `
  
  

  return (
    <div id="home_page" className={Styles.home}>
      <div className={Styles.img_section}>
        
        <div className="diologue_box">
        <ImgSectionHeading style={GlobalStylesInstance.H1} className={Styles.Heading}>
            Hey, My name is Muzaffar and I am a front-end developer</ImgSectionHeading>
        </div>
      </div>
      <div className={Styles.about_me_page}>
        <div className={Styles.my_img}>
        </div>
        <div style={background==true?GlobalStylesInstance._p.dark:GlobalStylesInstance._p.light} className={Styles.my_desc}>
        <h1 style={GlobalStylesInstance.H1} className="about_me_text">About Me</h1>
        I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices, writing clean JavaScript, typesCript,React and the necessary tools for them such as Tailwind CSS, styled-components,react-route-dom and others. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I reside  in Tashkent, Uzbekistan, working remotely is much more prefered, however, offline working style can also be compatible. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
        <ButtonComp  text={"go to portfolio"} page="projects"/>
        </div>
      </div>
      <section className={Styles.contact_me_section}>
        <ProjectPart style={GlobalStylesInstance.H2}>Interested in doing a project with me?</ProjectPart>
        <ClickOn style={GlobalStylesInstance.H3} >click on contact me button</ClickOn>
        <ButtonComp text={"Contact Me"} page="contact"/>
      </section>
    </div>
  )
}

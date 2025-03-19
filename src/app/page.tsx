"use client";
import React from "react";
import Styles from "./home/home.module.css";
import ButtonComp from "@/components/btn/comp";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home_page" className={Styles.home}>
      {/* Hero Section */}
      <section className={Styles.hero_section}>
        <motion.h1
          className={Styles.hero_heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hey, I’m <span className={Styles.name}>Muzaffar</span>,  
          a passionate <span className={Styles.role}>Full-stack Web Developer</span>.
        </motion.h1>
        <motion.p
          className={Styles.hero_subtext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I specialize in creating **clean, user-friendly** web experiences with modern tech, telegram bot and futher staff.
        </motion.p>
      </section>

      {/* About Me Section */}
      <section className={Styles.about_section}>
        <motion.div
          className={Styles.about_content}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={Styles.about_heading}>About Me</h2>
          <p>
            I’m a **junior full-stack developer and Middle Frontend developer** looking for an exciting role where I can create **intuitive, high-performing** user interfaces.
          </p>
          <p>
            My go-to stack includes **React, TypeScript, Tailwind CSS, Styled-Components, and React Router, Node Js and ...**.
          </p>
          <p>
            When I’m not coding, I enjoy **cycling, running, and exploring new places**.
          </p>
          <Link href="/projects" className={Styles.project_link}>
            Check Out My Work →
          </Link>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className={Styles.contact_section}>
        <motion.h2
          className={Styles.contact_heading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let’s Build Something Amazing!
        </motion.h2>
        <motion.p
          className={Styles.contact_text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Have an idea or a project in mind? I’d love to hear about it.
        </motion.p>
        <ButtonComp text={"Get in Touch"} page="contact" />
      </section>
    </div>
  );
}

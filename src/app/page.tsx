"use client";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Styles from "./stats/stats.module.css";
import { motion, useAnimation } from "framer-motion";
import { FaCode, FaDatabase, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { SiMongodb, SiMysql, SiJavascript, SiPython, SiTypescript, SiJava, SiVba } from "react-icons/si";

const statsData = [
  { icon: <FaProjectDiagram />, label: "Real Projects", value: 10, suffix: "+" },
  { icon: <FaLaptopCode />, label: "Practice Projects", value: 50, suffix: "+" },
  { icon: <FaCode />, label: "Programming Languages", value: 5, suffix: "" },
  { icon: <FaDatabase />, label: "Databases Used", value: 2, suffix: "" },
];

const languages = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJava />, name: "Java" },
  { icon: <SiVba />, name: "VBA" },
];

const databases = [
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "SQL (MySQL, SQL Workbench)" },
];

export default function StatisticsPage() {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const Counter = ({ value, suffix }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 1000; // 1s
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }, [value]);
    return (
      <span className={Styles.counter}>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className={Styles.container}>
      {/* Page Heading */}
      <motion.h1
        className={Styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Statistics
      </motion.h1>

      {/* Stats Grid */}
      <div className={Styles.statsGrid}>
        {statsData.map((stat, i) => (
          <motion.div
            className={Styles.statCard}
            key={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={Styles.icon}>{stat.icon}</div>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <motion.div
        className={Styles.section}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Programming Languages</h2>
        <div className={Styles.techGrid}>
          {languages.map((lang, idx) => (
            <div key={idx} className={Styles.techItem}>
              <span className={Styles.techIcon}>{lang.icon}</span>
              {lang.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Databases */}
      <motion.div
        className={Styles.section}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Databases & Tools</h2>
        <div className={Styles.techGrid}>
          {databases.map((db, idx) => (
            <div key={idx} className={Styles.techItem}>
              <span className={Styles.techIcon}>{db.icon}</span>
              {db.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div
        className={Styles.about}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate <strong>Full-stack Web Developer</strong> with expertise in both frontend and backend technologies.
          My experience includes building <strong>10+ real projects</strong> and <strong>50+ practice projects</strong> in different tech stacks.
        </p>
        <p>
          I love exploring <strong>modern web frameworks</strong>, integrating <strong>databases</strong>, and writing clean, scalable code.
        </p>
      </motion.div>
=======

import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Node.js", "Express", "Tailwind", "Vite","Python","Java","C","VBA","Mongo","SQL"
  ];

  const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Technologies Learned", value: skills.length.toString() },
    { label: "Courses Completed", value: "10+" },
    { label: "Certifications", value: "5" }
  ];

  const education = [
    { degree: "Bachelor's", school: "Millat Umidi University (Cambridge International)", year: "2023" },
    { degree: "Masters (planned)", school: "TBD (USA / Germany / Italy)", year: "2025" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 relative">
     
      <main className="flex-1 p-6  transition-all duration-300 space-y-12">
        {/* Profile Section */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <Image
              src="/profile.jpg" // replace with your image
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Muzaffar Abdukadirov</h1>
            <p className="text-gray-700 text-lg">
              Software Engineer | Frontend & Fullstack Developer | Passionate about creating interactive web experiences.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center"
            >
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Education & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <Link href="/university"><div key={idx} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                <p className="font-semibold text-lg">{edu.degree}</p>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div></Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact & Links</h2>
          <div className="flex gap-4 flex-wrap">
            <a href="mailto:your.email@example.com" className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
              Email
            </a>
            <a href="https://github.com/mrkadirov2005" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/muzaffar-abduqodirov-0a8b42248/" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
>>>>>>> c29b8de0a14d3fcab4ed9dc8839f58cb063d0ed2
    </div>
  );
}

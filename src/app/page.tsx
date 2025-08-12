"use client";
import React, { useState, useEffect } from "react";
import Styles from "./home/home.module.css";
import ButtonComp from "@/components/btn/comp";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

function useTypewriter(text: string, speed = 50) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skillVariants: Variants = {
  hidden: { width: 0 },
  visible: (width) => ({
    width: `${width}%`,
    transition: { duration: 1.2, ease: "easeOut" },
  }),
};

const socialIcons = [
  { href: "https://github.com/mrkadirov2005", icon: "🐙", label: "GitHub" },
  { href: "https://www.linkedin.com/in/muzaffar-abduqodirov-0a8b42248/", icon: "🔗", label: "LinkedIn" },
  { href: "https://t.me/itechnic_me", icon: "📞", label: "Telegram" },
];

// All your skills for the carousel:
const rotatingSkills = [
  "JavaScript", "Python", "Java", "React", "Next.js", "TypeScript",
  "HTML", "CSS", "Bootstrap", "OOP", "FP",
  "C", "VBA", "CSS Modules", "Tailwind CSS", "Styled Components",
  "Vite", "Redux Toolkit", "MUI", "Node.js", "Express.js",
  "SQL: MySQL", "NoSQL: MongoDB", "ENGLISH"
];

// Number of visible items on the carousel (like 5 or 7)
const visibleCount = 7;

export default function HomePage() {
  const typedHeading = useTypewriter("Hey, I’m Muzaffar, a passionate Full-stack Web Developer,",40);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Show Back to top button after scroll
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // For rotating carousel, keep track of the current center index to animate rotation
  const [centerIndex, setCenterIndex] = useState(0);

  // Update center index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % rotatingSkills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate positions for carousel items (using a circle)
  // We'll use a circular layout in 3D style with scaling and opacity based on position relative to center
  // The visibleCount defines how many items are visible at once (e.g. 7)

  const getCarouselItemStyle = (index: number) => {
    const total = rotatingSkills.length;
    // Calculate relative position to center index
    let relativePos = index - centerIndex;
    // Normalize relativePos for circular loop
    if (relativePos < -total / 2) relativePos += total;
    if (relativePos > total / 2) relativePos -= total;

    // If outside visible range, hide
    if (Math.abs(relativePos) > Math.floor(visibleCount / 2)) {
      return { opacity: 0, pointerEvents: "none", transform: "scale(0)" };
    }

    // Calculate horizontal position offset, scale and opacity
    const baseTranslateX = 120; // px offset between items horizontally
    const translateX = relativePos * baseTranslateX;

    // Scale: center item is largest (1), neighbors smaller (down to 0.7)
    const scale = 1 - Math.abs(relativePos) * 0.15;

    // Opacity: center 1, sides 0.5
    const opacity = 1 - Math.abs(relativePos) * 0.3;

    // Z-index higher for center
    const zIndex = visibleCount - Math.abs(relativePos);

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: "auto",
      transition: "all 0.8s ease",
      position: "absolute" as const,
      left: "50%",
      top: "50%",
      transformOrigin: "center center",
      userSelect: "none",
      cursor: "default",
      color: scale < 0.85 ? "#666" : "#2563eb", // highlight center
      fontWeight: scale < 0.85 ? 400 : 700,
      fontSize: scale < 0.85 ? "1rem" : "1.3rem",
      whiteSpace: "nowrap",
      padding: "6px 12px",
      borderRadius: "12px",
      backgroundColor: scale < 0.85 ? "transparent" : "rgba(37, 99, 235, 0.15)",
    };
  };

  return (
    <div id="home_page" className={`${Styles.home} ${darkMode ? Styles.dark : ""}`}>
      {/* Dark mode toggle */}
      <button
        className={Styles.darkToggle}
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      {/* Hero Section */}
      <motion.section
        className={Styles.hero_section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className={Styles.hero_heading}>
          {typedHeading.split("Muzaffar").map((part, i) =>
            i === 0 ? (
              <>{part}</>
            ) : (
              <React.Fragment key={i}>
                <span className={Styles.name}>Muzaffar</span>
                {part}
              </React.Fragment>
            )
          )}
          <br />
          <span className={Styles.role}>Full-stack Web Developer</span>.
        </h1>
        <motion.p
          className={Styles.hero_subtext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          I specialize in creating <strong>clean, user-friendly</strong> web experiences with modern tech, telegram bots, and more.
        </motion.p>

        {/* Confetti / particle effect */}
        <motion.div
          className={Styles.confetti}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          aria-hidden="true"
        >
          🎉✨🚀
        </motion.div>
      </motion.section>

      {/* Skills Section with animated bars */}
      <motion.section
        className={Styles.skills_section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={Styles.skills_heading}>My Skills</h2>
        <div className={Styles.skills_list}>
          {[
            { name: "Frontend ", level: 70 },
            { name: "Backend", level: 40 },
            { name: "Telegram Bot", level: 50 },
            { name: "AI integration", level: 40 },
            { name: "DB", level: 60 },
           
          ].map(({ name, level }) => (
            <div key={name} className={Styles.skill}>
              <span className={Styles.skillName}>{name}</span>
              <motion.div
                className={Styles.skillBar}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                custom={level}
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Rotating skills carousel */}
      <motion.section className={Styles.carousel_section} aria-label="Rotating skills carousel">
        <h2 className={Styles.skills_heading}>Tech Stack Carousel</h2>
        <div className={Styles.carousel_container}>
          {rotatingSkills.map((skill, i) => (
            <div
              key={skill + i}
              style={getCarouselItemStyle(i)}
              className={Styles.carouselItem}
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        className={Styles.about_section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={Styles.about_content}>
          <h2 className={Styles.about_heading}>About Me</h2>
          <p>
            I’m a <strong>junior full-stack developer and Middle Frontend developer</strong> looking for an exciting role where I can create <strong>intuitive, high-performing</strong> user interfaces.
          </p>
          <p>
            My go-to stack includes <strong>React, TypeScript, Tailwind CSS, Styled-Components, React Router, Node.js</strong>, and more.
          </p>
          <p>
            When I’m not coding, I enjoy <strong>cycling, running, and exploring new places</strong>.
          </p>
          <Link href="/projects" className={Styles.project_link}>
            <motion.span
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(59, 130, 246)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Check Out My Work →
            </motion.span>
          </Link>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className={Styles.contact_section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
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
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
          <ButtonComp text={"Get in Touch"} page="contact" />
        </motion.div>

        {/* Social icons with tooltip */}
        <div className={Styles.socialIcons}>
          {socialIcons.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={Styles.socialIcon}
              title={label}
            >
              <motion.span
                whileHover={{ scale: 1.3, rotate: 15, color: "#2563eb" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.span>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Back to Top button */}
      {showTopBtn && (
        <motion.button
          className={Styles.backToTop}
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll back to top"
          title="Back to top"
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}

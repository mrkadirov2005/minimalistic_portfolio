"use client";
import { useState } from "react";
import Styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

 const gradients: Record<string, string> = {
  black: "linear-gradient(135deg, #000000, #434343)",
  purple: "linear-gradient(135deg, #7b2ff7, #f107a3)",
  green: "linear-gradient(135deg, #11998e, #38ef7d)",
  blue: "linear-gradient(135deg, #2980b9, #6dd5fa, #00f2fe)",
  darkblue: "linear-gradient(135deg, #000428, #004e92)",
  orange: "linear-gradient(135deg, #ff8008, #ffc837)",
  grey: "linear-gradient(135deg, #bdc3c7, #2c3e50)",
};

const handleChangeColor = (colorKey: string) => {
  const gradient = gradients[colorKey] || colorKey;
  document.body.style.transition = "background 0.5s ease-in-out";
  document.body.style.background = gradient;
};

  return (
    <header className={Styles.header}>
      {/* Logo */}
      <div className={Styles.logo_container}>
        <Image src="/profile_photo.jpg" width={20} height={20} alt="my Profile photo" className={Styles.header_M_logo} />
      </div>

      {/* Desktop Navigation */}
      <nav className={`${Styles.nav_ul} ${menuOpen ? Styles.hidden : ""}`}>
        <Link className={Styles.header_link} href="/">Home</Link>
        <Link className={Styles.header_link} href="/about">About</Link>
        <Link className={Styles.header_link} href="/projects">Projects</Link>
        <Link className={Styles.header_link} href="/techniques">Techniques</Link>
        <Link className={Styles.header_link} href="/contact">Contact</Link>
      </nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={`${Styles.mobile_nav} ${menuOpen ? Styles.active : ""}`}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <button className={Styles.close_button} onClick={() => setMenuOpen(false)}>✖</button>
        <Link className={Styles.mobile_link} href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className={Styles.mobile_link} href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link className={Styles.mobile_link} href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link className={Styles.mobile_link} href="/techniques" onClick={() => setMenuOpen(false)}>Techniques</Link>
        <Link className={Styles.mobile_link} href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </motion.nav>

      {/* Background Color Changer */}
      <div className={Styles.background_setter}>
        <span>Background:</span>
        <div className={Styles.background_inner}>
          {["black", "purple", "green", "blue", "darkblue", "orange", "grey"].map((color) => (
            <button
              key={color}
              className={Styles.color_button}
              style={{ backgroundColor: color }}
              onClick={() => handleChangeColor(color)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className={Styles.toggler_header} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>
    </header>
  );
}

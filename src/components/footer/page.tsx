"use client";
import React from "react";
import Links from "../links";
import Link from "next/link";
import "./page.css";

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="indicators">
        <button className="routers">🔼</button>
        <button className="routers">🔽</button>
      </div>

      <ul className="nav-list">
        <li><Link href="/" className="nav-link">home</Link></li>
        <li><Link href="/about" className="nav-link">about me</Link></li>
        <li><Link href="/projects" className="nav-link">projects</Link></li>
        <li><Link href="/techniques" className="nav-link">techniques</Link></li>
        <li><Link href="/contact" className="contact-link">contact me</Link></li>
      </ul>

      <Links />
    </footer>
  );
};

export default FooterComp;

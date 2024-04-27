"use client"
import React from "react";
import styled from 'styled-components';
import Links from "../links";
import Link from "next/link";
import "./page.css"

const Footer = styled.footer`
  width: 96%;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px){
    flex-direction: column;
    height: auto;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: large;
  text-transform: uppercase;
  color: whitesmoke;
  cursor: pointer;
`;

const FooterComp = () => {

  return (
    <Footer >
      <div className="indicators">
        <Button className="routers">🔼</Button>
        <Button className="routers">🔽</Button>
      </div>
      <ul className="nav_ul">
        <Link href='/'  className="next_Link_header">home</Link>
        <Link href='/about'  className="next_Link_header">about me</Link>
        <Link href='/projects'  className="next_Link_header">projects</Link>
        <Link href='/techniques'  className="next_Link_header">techniques</Link>
        <Link href='/contact'  className="contact-me" id="contact-me-button">contact me</Link>
      </ul>
      <Links/>
    </Footer>
  );
};

export default FooterComp;

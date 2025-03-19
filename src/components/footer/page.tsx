"use client"
import React from "react";
import styled from "styled-components";
import Links from "../links";
import Link from "next/link";

const Footer = styled.footer`
  width: 100%;
  margin: 0;
  padding: 15px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 -4px 10px rgba(0, 255, 255, 0.2);
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    padding: 20px 5%;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    color: #34d1bf;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 6px;
  transition: 0.3s ease-in-out;
  display: block;
  text-align: center;

  &:hover {
    background: linear-gradient(45deg, #07637a, #34d1bf);
    color: white;
    box-shadow: 0px 4px 10px rgba(0, 255, 255, 0.3);
  }
`;

const ContactLink = styled(NavLink)`
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  padding: 10px 15px;
  border-radius: 6px;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px rgba(255, 75, 43, 0.4);
    transform: scale(1.05);
  }
`;

const Indicators = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

const FooterComp = () => {
  return (
    <Footer>
      <Indicators>
        <Button className="routers">🔼</Button>
        <Button className="routers">🔽</Button>
      </Indicators>

      <NavList>
        <NavLink href="/">home</NavLink>
        <NavLink href="/about">about me</NavLink>
        <NavLink href="/projects">projects</NavLink>
        <NavLink href="/techniques">techniques</NavLink>
        <ContactLink href="/contact">contact me</ContactLink>
      </NavList>

      <Links />
    </Footer>
  );
};

export default FooterComp;

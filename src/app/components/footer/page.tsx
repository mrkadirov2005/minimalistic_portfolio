import React from "react";
import styled from 'styled-components';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { useNavigate } from "react-router-dom";
import Links from "../links";

const Footer = styled.footer`
  background-color: ${ GlobalStylesInstance._colors.primary.GrayishDarkBlue.HEX };
  color: ${GlobalStylesInstance._p.light.color};
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
  const navigate = useNavigate();

  return (
    <Footer >
      <div className="indicators">
        <Button className="routers">🔼</Button>
        <Button className="routers">🔽</Button>
      </div>
      <ul className="nav_ul">
        <Button onClick={() => navigate('/')} className="next_Link">home</Button>
        <Button onClick={() => navigate('/about')} className="next_Link">about me</Button>
        <Button onClick={() => navigate('/projects')} className="next_Link">projects</Button>
        <Button onClick={() => navigate('/techniques')} className="next_Link">techniques</Button>
        <Button onClick={() => navigate('/contact')} className="contact-me" id="contact-me-button">contact me</Button>
      </ul>
      <Links/>
    </Footer>
  );
};

export default FooterComp;

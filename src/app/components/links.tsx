import React from "react";
import Styles from "@/app/pages/Contact/contact.module.css";
import styled from "styled-components";
import Link from "next/link";

const LinksContainer = styled.div`
background-color: transparent;
width: 100px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export default function Links() {

  return (
    <LinksContainer>
      <Link href={"https://github.com/"}>
        <button className={Styles.github}></button>
      </Link>
      <Link href={"https://twitter.com/home?lang=en"}>
        <button className={Styles.twitter}></button>
      </Link>
      <Link href={"https://www.linkedin.com/feed/"}>
        <button className={Styles.linkedIn}></button>
      </Link>
    </LinksContainer>
  );
}

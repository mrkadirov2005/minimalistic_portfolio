import React from "react";
import styled from "styled-components";
import Link from "next/link";
const LinksContainer = styled.div`
  background-color: transparent;
  width: 250px;
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 25%;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
  }
`;

const TXT=styled.span`
 color:white;
 text-decoration:none
`


export default function Links() {
  return (
    <LinksContainer>
      <Link  href={"https://github.com/"}>
     <TXT>Github</TXT>
      </Link>
      <Link href={"https://twitter.com/home?lang=en"}>
        <TXT>Twitter</TXT>
      </Link>
      <Link href={"https://www.linkedin.com/in/muzaffar-abduqodirov-0a8b42248/"}>
      <TXT>LinkedIN</TXT>
      </Link>
    </LinksContainer>
  );
}

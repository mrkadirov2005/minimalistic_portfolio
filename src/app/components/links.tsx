import React from "react";
import styled from "styled-components";
import Link from "next/link";
const LinksContainer = styled.div`
  background-color: transparent;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 25%;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
  }
`;

const TXT=styled.span`
 color: orange;
 font-weight: bold;
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
      <Link href={"https://www.linkedin.com/feed/"}>
      <TXT>LinkedIN</TXT>
      </Link>
    </LinksContainer>
  );
}

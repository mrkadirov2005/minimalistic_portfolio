import React from "react";
import styles from "./layout.module.css";
import styled from "styled-components";
import FooterComp from "../footer/page";
import Header from "../header/page";



const LayOutContainer = styled.div`
  min-height: 94vh;
  width: 100vw;
  padding-top:200px;
`;

const Layout = () => {

  const GlobalContent = (
    <LayOutContainer className={styles.layout_container}>
      {/* <Header /> */}
      <FooterComp />
    </LayOutContainer>
  );

  return (
    <div className={styles.wrapper}>
      {GlobalContent}
    </div>
  );
};

export default Layout;

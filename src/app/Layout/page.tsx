import React from "react";
import Header from "../components/header/page";
import styles from "@/app/Layout/layout.module.css";
import styled from "styled-components";
import { GlobalStylesInstance } from "@/DATA/settings/Global";
import FooterComp from "../components/footer/page";
import { Outlet } from "react-router-dom";



const LayOutContainer = styled.div`
  background-color: ${GlobalStylesInstance._colors.primary.DarkBlue.HEX};
  min-height: 94vh;
  width: 100vw;
`;

const Layout = () => {

  const GlobalContent = (
    <LayOutContainer className={styles.layout_container}>
      <Header />
      <Outlet />
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

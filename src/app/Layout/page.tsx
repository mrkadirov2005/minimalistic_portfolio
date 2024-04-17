import React from "react";
import Header from "../components/header/page";
import styles from "@/app/Layout/layout.module.css"
import styled from "styled-components";
import { GlobalStylesInstance } from "@/DATA/settings/Global";
import FooterComp from "../components/footer/page";
import { useSelector } from "react-redux";
import {  Outlet } from "react-router-dom";
import { background, isLoggedIn, page } from "../Reducers/selector";

const LayOutContainer = styled.div`
background-color: ${(props)=>props.background == true? GlobalStylesInstance._colors.primary.DarkBlue.HEX: (props.background == false)? GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX: GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
min-height: 94vh;
width: 100vw;


`;



const Layout = () => {
  const backgroundMode:boolean=useSelector(background)


  const GlobalContent = (
     
       <LayOutContainer background={backgroundMode} className={styles.layout_container}>
        <Header />
        <Outlet/>
      <FooterComp />
      </LayOutContainer>
  );
  

  return ( <div className={styles.wrapper}>
   {GlobalContent}
    </div>
    )
};

export default Layout;



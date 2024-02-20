import React from "react";
import Header from "../components/header/page";

import Styles from "./layout.module.css";
import styled from "styled-components";
import { GlobalStylesInstance } from "@/DATA/settings/Global";
import FooterComp from "../components/footer/page";
import { useSelector } from "react-redux";
import { Basics } from "../Reducers/reducers";
import {  Outlet } from "react-router-dom";
import Register from "../pages/Register_page/Register";

const LayOutContainer = styled.div`
background-color: ${(props)=>props.background == true? GlobalStylesInstance._colors.primary.DarkBlue.HEX: (props.background == false)? GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX: GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
min-height: 94vh;
width: 100%;
`;



const Layout = () => {
  const info=useSelector(Basics)
  const background=info.basics.background
  const page=info.basics.page



  const GlobalContent = (
     
       <LayOutContainer background={background} className={Styles.layout_container}>
        <Header />
        <Outlet/>
      <FooterComp />
      </LayOutContainer>
  );
  
  const getLoggingState=JSON.parse(localStorage.getItem("isLoggedIn"))

  return ( <div className={Styles.Wrapper}>
   {/* { info.basics.isLoggedIn ?GlobalContent:<Register/>} */}
   {GlobalContent}
    </div>
    )
};

export default Layout;



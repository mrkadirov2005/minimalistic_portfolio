import React from "react";
import Header from "../components/header/page";
import Styles from "./layout.module.css";
import styled from "styled-components";
import { GlobalStylesInstance } from "@/DATA/settings/Global";
import FooterComp from "../components/footer/page";
import { useSelector } from "react-redux";
import {  Outlet } from "react-router-dom";
import Register from "../pages/Register_page/Register";
import { background, isLoggedIn, page } from "../Reducers/selector";

const LayOutContainer = styled.div`
background-color: ${(props)=>props.background == true? GlobalStylesInstance._colors.primary.DarkBlue.HEX: (props.background == false)? GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX: GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
min-height: 94vh;
width: 100%;
`;



const Layout = () => {
  const backgroundMode:boolean=useSelector(background)
  const pageMode:string=useSelector(page)
const LogginStatus:boolean=useSelector(isLoggedIn)


  const GlobalContent = (
     
       <LayOutContainer background={backgroundMode} className={Styles.layout_container}>
        <Header />
        <Outlet/>
      <FooterComp />
      </LayOutContainer>
  );
  

  return ( <div className={Styles.Wrapper}>
   {/* { LogginStatus ?GlobalContent:<Register/>} */}
   {GlobalContent}
    </div>
    )
};

export default Layout;



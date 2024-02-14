"use client"
import React, { createContext, Dispatch } from "react";
import Header from "../components/header/page";
import ContactMe from "../pages/Contact/page";
import TechniquesPage from "../pages/Techniques/page";
import AboutMe from "../pages/AboutMe/page";
import HomePage from "../pages/Home/page";
import Projects from "../pages/Projects/page";
import Styles from "./layout.module.css";
import styled from "styled-components";
import { GlobalStylesInstance } from "@/DATA/settings/Global";
import FooterComp from "../components/footer/page";

export type InfoContent = {
  tools: {
    state: any;
    dispatch: Dispatch<any>;
  };
};

export const InfoContext = createContext<InfoContent | undefined>(undefined);

interface Props {
  state: any;
  dispatch: React.Dispatch<any>;
}

const Layout = ({ state, dispatch }: Props) => {
  const background = state.background;
  const page = state.page;

  const LayOutContainer = styled.div`
    background-color: ${background == true
      ? GlobalStylesInstance._colors.primary.DarkBlue.HEX
      : background == false
      ? GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX
      : GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
    min-height: 94vh;
  `;

  const GlobalContent = (
    <InfoContext.Provider value={{ tools: { state, dispatch } }}>
      <LayOutContainer className={Styles.layout_container}>
        <Header />
        {page == "home" ? (
          <HomePage />
        ) : page == "about_me" ? (
          <AboutMe />
        ) : page == "projects" ? (
          <Projects />
        ) : page == "techniques" ? (
          <TechniquesPage />
        ) : page == "contact" ? (
          <ContactMe />
        ) : (
          ""
        )}
      </LayOutContainer>
      <FooterComp />
    </InfoContext.Provider>
  );

  return GlobalContent;
};

export default Layout;




// "use client"
// import {   createContext} from "react"
// import Header from "../components/header/page"
// import ContactMe from "../pages/Contact/page"
// import TechniquesPage from "../pages/Techniques/page"
// import AboutMe from "../pages/AboutMe/page"
// import HomePage from "../pages/Home/page"
// import Projects from "../pages/Projects/page"
// import Styles from "./layout.module.css"
// import styled from "styled-components"
// import { GlobalStylesInstance } from "@/DATA/settings/Global"
// import FooterComp from "../components/footer/page"


// export type infoContent={
//   tools:{state:any,dispatch:any},
// }
// export const InfoContext=createContext<infoContent>({

//   tools:{
//     state:{},
//     dispatch:"",
//   }
// })

// interface PROPS{
//   state:any,
//   dispatch:any
// }
//  const Layout=({state,dispatch}:PROPS)=> {
 
// const background=state.background
// const page=state.page

//   const LayOutContainer=styled.div`
//     background-color: ${background==true?GlobalStylesInstance._colors.primary.DarkBlue.HEX:(background==false)?GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX:GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
//     min-height: 94vh;
    
//   `



//   const GlobalContent= <InfoContext.Provider value={{tools:{state:state,dispatch:dispatch}}}>
//     <LayOutContainer className={Styles.layout_container}>
//  <Header />
// {page=="home"?<HomePage/>:(page=="about_me")?<AboutMe/>:(page=="projects")?<Projects/>:(page=="techniques")?<TechniquesPage/>:(page=="contact")?<ContactMe/>:""}
 
// </LayOutContainer>
// <FooterComp/>
//   </InfoContext.Provider>

    
//   return GlobalContent
// }

// export default Layout



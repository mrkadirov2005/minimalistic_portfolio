"use client";
import Layout from "./Layout/page";
import { Provider, useSelector } from "react-redux";
import { Basicstore } from "./Reducers/reducers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/page";
import AboutMe from "./pages/AboutMe/page";
import Projects from "./pages/Projects/page";
import TechniquesPage from "./pages/Techniques/page";
import ContactMe from "./pages/Contact/page";
import Register from "./pages/Register_page/Register";
export default function Home() {
  
  return (
      <Provider store={Basicstore}>
          <BrowserRouter>
          <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route element={<Layout/>}>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="about" element={<AboutMe/>}>aboutme</Route>
            <Route path="projects" element={<Projects/>}></Route>
            <Route path="techniques" element={<TechniquesPage/>}></Route>
            <Route path="contact" element={<ContactMe/>}></Route>
            <Route path="*" element={<HomePage/>}></Route>
          </Route>
              </Routes>
              </BrowserRouter>
   
      </Provider>
  );
}

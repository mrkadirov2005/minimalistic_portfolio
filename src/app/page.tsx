"use client";
import Layout from "./Layout/page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/page";
import AboutMe from "./pages/AboutMe/page";
import Projects from "./pages/Projects/page";
import TechniquesPage from "./pages/Techniques/page";
import ContactMe from "./pages/Contact/page";

export default function Home() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/techniques" element={<TechniquesPage/>} />
            <Route path="/contact" element={<ContactMe/>} />
            <Route path="*" element={<HomePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

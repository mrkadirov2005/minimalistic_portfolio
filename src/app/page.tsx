"use client";
import Layout from "@/components/Layout/page";
import HomePage from "./home/page";


export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  function navigateToHome(){
  
  }
  return (
   <div>
    <HomePage/>
   </div>
  );
}

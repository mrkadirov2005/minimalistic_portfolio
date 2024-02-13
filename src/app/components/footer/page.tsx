import Styles from "@/app/components/footer/page.module.css"
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import Links from "../links"


export default function FooterComp() {

 const info=useContext(InfoContext)
 const background=info.tools.state.background
const dispatch=info.tools.dispatch

const Footer=styled.header`
  background-color: ${background?GlobalStylesInstance._colors.primary.GrayishDarkBlue.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX};
  color: ${GlobalStylesInstance._p.light.color};
  width: 96%;
  padding: 0 2%;
`
const Button=styled.button`
background-color: transparent;
border: none;
font-size: large;
text-transform: uppercase;
color: whitesmoke;

`
console.log(GlobalStylesInstance.H1)



  return (
    <Footer className={Styles.header}>
    <div>
        <button className={Styles.routers}>🔼</button>
      <button className={Styles.routers}>🔽</button>
        
    </div>
    <ul className={Styles.nav_ul}>
        

         <Button onClick={()=>{dispatch( {type:"set_page",payload:"home"} )}} className={Styles.next_Link} >home</Button>
         <Button onClick={()=>dispatch( {type:"set_page",payload:"aboutme"} )} className={Styles.next_Link} >about me</Button>
         <Button onClick={()=>dispatch( {type:"set_page",payload:"projects"} )} className={Styles.next_Link} >projects</Button>
         <Button onClick={()=>dispatch( {type:"set_page",payload:"techniques"} )}  className={Styles.next_Link} >techniques</Button>
         <Button  onClick={()=>dispatch( {type:"set_page",payload:"contact"} )}  className="contact-me" id="contact-me-button">contact me</Button>
         
    </ul>
       <Links/>
 
    </Footer>
  )
}

import Styles from "@/app/components/footer/page.module.css"
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import Links from "../links"
import { useDispatch, useSelector } from "react-redux"
import { Basics } from "@/app/Reducers/reducers"
import { set_page } from "@/app/Reducers/slices"


export default function FooterComp() {

 const info=useSelector(Basics)
 const background=info.basics.background
const dispatch=useDispatch()

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
        

         <Button onClick={()=>{dispatch( set_page("home"))}} className={Styles.next_Link} >home</Button>
         <Button onClick={()=>dispatch( set_page("about_me"))} className={Styles.next_Link} >about me</Button>
         <Button onClick={()=>dispatch( set_page("projects"))} className={Styles.next_Link} >projects</Button>
         <Button onClick={()=>dispatch(set_page("techniques") )}  className={Styles.next_Link} >techniques</Button>
         <Button  onClick={()=>dispatch(set_page("contact") )}  className="contact-me" id="contact-me-button">contact me</Button>
         
    </ul>
       <Links/>
 
    </Footer>
  )
}

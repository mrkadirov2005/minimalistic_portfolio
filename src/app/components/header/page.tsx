import Styles from '@/app/components/header/page.module.css'
import Link from 'next/link'
import BasicSwitches from '../comp/toggler'
import { Dispatch, useContext, useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { set_page,set_background } from '@/app/Reducers/slices'
import { RootState } from '@/app/Reducers/reducers'
import { useDispatch, useSelector } from 'react-redux'

interface PROPS{
state:any,
dispatch:any
}
export default function Header() {
  const info=useSelector((state:RootState)=>state)

const background=info.basics.background
const dispatch=useDispatch()
const state=info.basics


const Header=styled.header`
  background-color: ${background?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
`
const Button=styled.button`
color:${background?"white":"black"};
background-color: transparent;
border: none;
font-size: large;
text-transform: uppercase;

`
console.log(GlobalStylesInstance.H1)







  return (
    <Header className={Styles.header}>
    <div>
        <button className={Styles.routers}>🔼</button>
      <button className={Styles.routers}>🔽</button>
        
    </div>
    <ul className={Styles.nav_ul}>
        

        <li className={Styles.li_item}> <Button onClick={()=>{dispatch(set_page("home"))}} className={Styles.next_Link} >home</Button></li>
        <li className={Styles.li_item}> <Button onClick={()=>dispatch(set_page("about_me"))} className={Styles.next_Link} >about me</Button></li>
        <li className={Styles.li_item}> <Button onClick={()=>dispatch(set_page("projects"))} className={Styles.next_Link} >projects</Button></li>
        <li className={Styles.li_item}> <Button onClick={()=>dispatch(set_page("techniques"))}  className={Styles.next_Link} >techniques</Button></li>
         
    </ul>
    <BasicSwitches  />
    <Button onClick={()=>dispatch(set_page("contact"))}   className="contact-me" id="contact-me-button">contact me</Button>
 
    </Header>
  )
}

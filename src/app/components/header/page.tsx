import Styles from '@/app/components/header/page.module.css'
import Link from 'next/link'
import BasicSwitches from '../comp/toggler'
import { Dispatch, useContext, useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import reducer, { initialState } from "../../Reducers/reducers"
import { InfoContext } from '@/app/Layout/page'


interface PROPS{
state:any,
dispatch:any
}
export default function Header() {

const info=useContext(InfoContext)
const background=info.tools.state.background
const dispatch=info.tools.dispatch
const state=info.tools.state



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
        

        <li className={Styles.li_item}> <Button onClick={()=>{dispatch({type:"set_page",payload:"home"})}} className={Styles.next_Link} >home</Button></li>
        <li className={Styles.li_item}> <Button onClick={()=>dispatch({type:"set_page",payload:"about_me"})} className={Styles.next_Link} >about me</Button></li>
        <li className={Styles.li_item}> <Button onClick={()=>dispatch({type:"set_page",payload:"projects"})} className={Styles.next_Link} >projects</Button></li>
        <li className={Styles.li_item}> <Button onClick={()=>dispatch({type:"set_page",payload:"techniques"})}  className={Styles.next_Link} >techniques</Button></li>
         
    </ul>
    <BasicSwitches  />
    <Button onClick={()=>dispatch({type:"set_page",payload:"contact"})}   className="contact-me" id="contact-me-button">contact me</Button>
 
    </Header>
  )
}

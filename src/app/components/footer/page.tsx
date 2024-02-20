import Styles from "@/app/components/footer/page.module.css"
import Link from 'next/link'
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import Links from "../links"
import { useDispatch, useSelector } from "react-redux"
import { Basics } from "@/app/Reducers/reducers"
import { set_page } from "@/app/Reducers/slices"
import { useNavigate } from "react-router-dom"


const Footer=styled.header`
  background-color: ${(props)=>props.background?GlobalStylesInstance._colors.primary.GrayishDarkBlue.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX};
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

export default function FooterComp() {

 const info=useSelector(Basics)
 const background=info.basics.background
const dispatch=useDispatch()
const navigate=useNavigate()





  return (
    <Footer background={background} className={Styles.header}>
    <div>
        <button className={Styles.routers}>🔼</button>
      <button className={Styles.routers}>🔽</button>
        
    </div>
    <ul className={Styles.nav_ul}>
        

         <Button onClick={()=>navigate('/')} className={Styles.next_Link} >home</Button>
         <Button onClick={()=>navigate('/about')} className={Styles.next_Link} >about me</Button>
         <Button onClick={()=>navigate('/projects')} className={Styles.next_Link} >projects</Button>
         <Button onClick={()=>navigate('/techniques')}  className={Styles.next_Link} >techniques</Button>
         <Button  onClick={()=>navigate('/contact')}  className="contact-me" id="contact-me-button">contact me</Button>
         
    </ul>
       <Links/>
 
    </Footer>
  )
}

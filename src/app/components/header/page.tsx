import Styles from '@/app/components/header/page.module.css'
import {Link, useNavigate} from "react-router-dom"
import BasicSwitches from '../comp/toggler'
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { set_isLoggedIn, set_page } from '@/app/Reducers/slices'
import { RootState } from '@/app/Reducers/reducers'
import { useDispatch, useSelector } from 'react-redux'
import './responsive_styles.css'

interface PROPS{
state:any,
dispatch:any
}
  const HeaderContainer=styled.header`
    background-color: ${(props)=>props.background?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
  `
export default function Header() {
  const info=useSelector((state:RootState)=>state)

const background=info.basics.background
const dispatch=useDispatch()
const state=info.basics
const navigate=useNavigate()



console.log(GlobalStylesInstance.H1)
//TODO here in this place, An object was used instead of styled components
const LinkStyles={
  color: state.background?GlobalStylesInstance._p.dark.color:GlobalStylesInstance._p.light.color,
  listStyle: 'none',
  textDecoration: 'none',
  textTransform: 'uppercase',
}

const handleToggler=()=>{
  // const switcher=document.getElementById('switcher') as HTMLDivElement
  const nav_ul=document.getElementById("nav_ul") as HTMLDivElement
  const links_of_header=document.querySelectorAll('#header_link')
  links_of_header.forEach((item)=>item.classList.toggle('mobile_header_links'))
  nav_ul.classList.toggle('enabled')
  // switcher.classList.toggle('enabled')
  
   
}





  return (
    <HeaderContainer background={background} id='header' className={Styles.header}>
    <div>
        <button >🔼</button>
      <button >🔽</button>
        
    </div>
    <ul className={Styles.nav_ul} id='nav_ul'>
        

       <Link id='header_link'  style={LinkStyles} to={"/"} >home</Link>
       <Link id='header_link'  style={LinkStyles} to={"/about"}   >about me</Link>
       <Link id='header_link'  style={LinkStyles} to={"/projects"} >projects</Link>
       <Link id='header_link'  style={LinkStyles} to={"/techniques"} >techniques</Link>
      <Link  id='header_link' to={"/contact"}   style={LinkStyles} id="contact-me-button">contact me</Link>
         
    </ul>
    <button className={Styles.logout} id='logout' onClick={()=>{
      dispatch(set_isLoggedIn(false))
       localStorage.setItem("isLoggedIn",JSON.stringify(false))
      navigate('/')
      }}
       
       >sign out</button>
    <BasicSwitches  />
    <button className={Styles.toggler_header} onClick={()=>handleToggler()}> toggler header</button>

 
    </HeaderContainer>
  )
}

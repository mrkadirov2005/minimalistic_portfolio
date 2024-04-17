import Styles from '@/app/components/header/page.module.css'
import {Link, useNavigate} from "react-router-dom"
import BasicSwitches from '../comp/toggler'
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { set_isLoggedIn, set_page } from '@/app/Reducers/slices'
import { RootState } from '@/app/Reducers/reducers'
import { useDispatch, useSelector } from 'react-redux'
import './responsive_styles.css'
import Navigator from './navigator/navigator'
import { background } from '@/app/Reducers/selector'

interface PROPS{
state:any,
dispatch:any
}
interface LocalProps{
  background: boolean;
}
  const HeaderContainer=styled.header<LocalProps>`
    background-color: ${(props)=>props.background?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
  `
export default function Header() {
  const info=useSelector(background)




console.log(GlobalStylesInstance.H1)


const handleToggler=()=>{
  // const switcher=document.getElementById('switcher') as HTMLDivElement
  const nav_ul=document.getElementById("nav_ul") as HTMLDivElement
  const links_of_header=document.querySelectorAll('#header_link')
  links_of_header.forEach((item)=>item.classList.toggle('mobile_header_links'))
  nav_ul.classList.toggle('enabled')
  // switcher.classList.toggle('enabled')
  
   
}





  return (
    <HeaderContainer background={info} id='header' className={Styles.header}>
    <div>
        <button >🔼</button>
      <button >🔽</button>
        
    </div>
    <ul className={Styles.nav_ul} id='nav_ul'>
        


      <Navigator linkId='/' text='Home' />
      <Navigator linkId='/about' text='About' />
      <Navigator linkId='/projects' text='Projects' />
      <Navigator linkId='/techniques' text='Resume' />
      <Navigator linkId='/contact' text='Contact' />
         
    </ul>
   
    <BasicSwitches  />
    <button className={Styles.toggler_header} onClick={()=>handleToggler()}> T</button>

 
    </HeaderContainer>
  )
}

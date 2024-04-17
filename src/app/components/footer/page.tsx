import Styles from "@/app/components/footer/page.module.css"
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import Links from "../links"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { background } from "@/app/Reducers/selector"

interface LocalProps{
  info:boolean
}
const Footer=styled.header<LocalProps>`
  background-color: ${(props)=>props.info?GlobalStylesInstance._colors.primary.GrayishDarkBlue.HEX:GlobalStylesInstance._colors.primary.DarkBlue.HEX};
  color: ${GlobalStylesInstance._p.light.color};
  width: 96%;
  padding: 0 2%;
  @media (max-width:800px){
    flex-direction: column;
    height: auto;
  }
`
const Button=styled.button`
background-color: transparent;
border: none;
font-size: large;
text-transform: uppercase;
color: whitesmoke;

`

export default function FooterComp() {

 const info=useSelector(background)
const dispatch=useDispatch()
const navigate=useNavigate()





  return (
    <Footer info={info} className={Styles.header}>
    <div className={Styles.indicators}>
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

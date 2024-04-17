"use client"
import React, { useContext } from 'react'
import Styles from "./contact.module.css"
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import Links from '@/app/components/links'
import SendMessage from '@/app/components/contactSendMessageComp/sendMessage'
import { useSelector } from 'react-redux'
import { Basics } from '@/app/Reducers/reducers'

interface LocalProps{
  background: boolean;
  inputcolor?:string
}
const MainContainer=styled.section`
background-color: transparent;
`
const Heading=styled.h1`
color: ${(props)=>props.color};
margin: 0;
/* width: 50%; */
margin-right: auto;
margin-left:auto;
`
const Label=styled.label`
color:${(props)=>props.color} ;
`

const Input=styled.input<LocalProps>`
background-color: ${(props)=>!props.background?"grey":"cyan"};
color: ${(props)=>props.inputcolor};
@media (max-width:800px){
  width: 80%;
}
`
const Textarea=styled.textarea<LocalProps>`
background-color: ${(props)=>!props.background?"grey":"cyan"};
color: ${(props)=>props.inputcolor};
@media (max-width:800px){
  width: 80%;
}
`

export default function ContactMe() {
  const info=useSelector(Basics)

const background=info.basics.background


  const color=background==false?GlobalStylesInstance._p.light.color:GlobalStylesInstance._p.dark.color
  const inputcolor=background==false?GlobalStylesInstance._p.dark.color:GlobalStylesInstance._p.light.color
 

  return (
    <MainContainer color={color} className={Styles.main}>
<div className={Styles.get__in_touch_info_part}>
<Heading color={color} style={GlobalStylesInstance.H1}>Get in Touch</Heading>
<div className={Styles.get_in_touch_container_manager}>
  <p className={Styles.paragraph} style={background?GlobalStylesInstance._p.dark:GlobalStylesInstance._p.light}>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
  <Links/>
</div>
</div>

<div className={Styles.contact_me_wrapper}>
<Heading color={color} style={GlobalStylesInstance.H1}>Contact me</Heading>

<form action="mailto:muzaffar571181@gmail.com" method='post' className={Styles.form}>
  <Label color={color} className={Styles.label}  htmlFor="name">Name</Label> 
  <Input background={background} inputcolor={inputcolor} className={Styles.input} type="text" id='name' required placeholder='Muzaffar Kadirov' />

  <Label color={color}  className={Styles.label} htmlFor="email">Email</Label>
  <Input background={background} inputcolor={inputcolor} className={Styles.input} type="text" id='email' required placeholder='example@gmail.com' />

  <Label color={color} className={Styles.label} htmlFor="message">Message</Label>
  <Textarea background={background} inputcolor={inputcolor} className={Styles.textarea}  id='message' required placeholder="write your message here" />
  <SendMessage/>
</form>

</div>


    </MainContainer>
  )
}

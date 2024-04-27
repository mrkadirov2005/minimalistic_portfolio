"use client"
import React  from 'react'
import Styles from "./contact.module.css"
import styled from 'styled-components'
import Links from '@/components/links'
import SendMessage from '@/components/contactSendMessageComp/sendMessage'

interface LocalProps{
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
background-color: white;
outline:none;
color: ${"black"};
@media (max-width:800px){
  width: 80%;
}
`
const Textarea=styled.textarea<LocalProps>`
background-color: white;
outline:none;
color: ${"black"};
@media (max-width:800px){
  width: 80%;
}
`

export default function ContactMe() {



  const inputcolor="blue"
 

  return (
    <MainContainer className={Styles.main}>
<div className={Styles.get__in_touch_info_part}>
<Heading  >Get in Touch</Heading>
<div className={Styles.get_in_touch_container_manager}>
  <p className={Styles.paragraph} >I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
  <Links/>
</div>
</div>

<div className={Styles.contact_me_wrapper}>
<Heading >Contact me</Heading>

<form action="mailto:muzaffar571181@gmail.com" method='post' className={Styles.form}>
  <Label  className={Styles.label}  htmlFor="name">Name</Label> 
  <Input  inputcolor={inputcolor} className={Styles.input} type="text" id='name' required placeholder='Muzaffar Kadirov' />

  <Label   className={Styles.label} htmlFor="email">Email</Label>
  <Input  inputcolor={inputcolor} className={Styles.input} type="text" id='email' required placeholder='example@gmail.com' />

  <Label  className={Styles.label} htmlFor="message">Message</Label>
  <Textarea  inputcolor={inputcolor} className={Styles.textarea}  id='message' required placeholder="write your message here" />
  <SendMessage/>
</form>

</div>


    </MainContainer>
  )
}

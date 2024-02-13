import React, { useContext } from 'react'
import Styles from "./contact.module.css"
import styled from 'styled-components'
import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { InfoContext } from '@/app/Layout/page'
import Links from '@/app/components/links'
import SendMessage from '@/app/components/contactSendMessageComp/sendMessage'

export default function ContactMe() {
  const info=useContext(InfoContext)

const background=info.tools.state.background


  const colorSystem=background==false?GlobalStylesInstance._p.light.color:GlobalStylesInstance._p.dark.color
  const inputColorSystem=false?GlobalStylesInstance._p.dark.color:GlobalStylesInstance._p.light.color
  const MainContainer=styled.section`
    background-color: transparent;
  `
  const Heading=styled.h1`
  color: ${colorSystem};
  margin: 0;
  `
const Label=styled.label`
  color:${colorSystem} ;
`

const Input=styled.input`
  background-color: ${!background?"grey":"cyan"};
  color: ${inputColorSystem};
`
const Textarea=styled.textarea`
background-color: ${!background?"grey":"cyan"};
  color: ${inputColorSystem};
`

  return (
    <MainContainer className={Styles.main}>
<div className={Styles.get__in_touch_info_part}>
<Heading style={GlobalStylesInstance.H1}>Get in Touch</Heading>
<div className={Styles.get_in_touch_container_manager}>
  <p className={Styles.paragraph} style={background?GlobalStylesInstance._p.dark:GlobalStylesInstance._p.light}>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
  <Links/>
</div>
</div>

<div className={Styles.contact_me_wrapper}>
<Heading style={GlobalStylesInstance.H1}>Contact me</Heading>

<form action="" className={Styles.form}>
  <Label className={Styles.label}  htmlFor="name">Name</Label> 
  <Input className={Styles.input} type="text" id='name' required placeholder='Muzaffar Kadirov' />

  <Label className={Styles.label} htmlFor="email">Email</Label>
  <Input className={Styles.input} type="text" id='email' required placeholder='example@gmail.com' />

  <Label className={Styles.label} htmlFor="message">Message</Label>
  <Textarea className={Styles.textarea}  id='message' required placeholder="write your message here" />
  <SendMessage/>
</form>

</div>


    </MainContainer>
  )
}

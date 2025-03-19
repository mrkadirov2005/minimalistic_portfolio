"use client";
import React from "react";
import Styles from "./contact.module.css";
import styled from "styled-components";
import Links from "@/components/links";
import SendMessage from "@/components/contactSendMessageComp/sendMessage";

const MainContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #444;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 20px;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s ease;
  
  &:focus {
    border-color: #000;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s ease;
  min-height: 120px;
  
  &:focus {
    border-color: #000;
  }
`;

const Button = styled.button`
  background: black;
  color: white;
  font-size: 1rem;
  padding: 12px 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 20px auto 0;
  
  &:hover {
    background: #333;
  }
`;

export default function ContactMe() {
  const downloadCV = () => {
    const fileURL = "/updated_RSM.pdf"; // Ensure the file is in the `public` folder
    const anchor = document.createElement("a");
    anchor.href = fileURL;
    anchor.download = "updated_RSM.pdf";
    anchor.click();
    console.log("Downloading CV...");
  };

  return (
    <MainContainer>
      {/* Get in Touch Section */}
      <section className={Styles.get__in_touch_info_part}>
        <Heading>Get in Touch</Heading>
        <Paragraph>
          I&apos;d love to hear about what you&apos;re working on and how I could help.
          I&apos;m currently looking for new opportunities, preferably remote, but
          I&apos;m open to all possibilities.
        </Paragraph>
        <Links />
        <Button onClick={downloadCV}>Download CV</Button>
      </section>

      {/* Contact Form Section */}
      <section className={Styles.contact_me_wrapper}>
        <Heading>Contact Me</Heading>
        <form action="mailto:muzaffar571181@gmail.com" method="post" className={Styles.form}>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" required placeholder="Your Name" />

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required placeholder="your@email.com" />

          <Label htmlFor="message">Message</Label>
          <Textarea id="message" required placeholder="Write your message here" />

          <SendMessage />
        </form>
      </section>
    </MainContainer>
  );
}

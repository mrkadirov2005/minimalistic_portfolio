"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Links from "@/components/links";
import SendMessage from "@/components/contactSendMessageComp/sendMessage"; // If this is a button with spinner, keep it or replace

const MainContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Section = styled(motion.section)`
  margin-bottom: 60px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #222;
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  color: #555;
  text-align: center;
  max-width: 720px;
  margin: 0 auto 24px;
  line-height: 1.5;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputStyles = `
  width: 100%;
  padding: 16px 14px 16px 14px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;
  background: transparent;
  color: #222;

  &:focus {
    border-color: #0070f3;
    box-shadow: 0 0 8px #0070f3aa;
  }
`;

const Input = styled.input`
  ${InputStyles}
`;

const Textarea = styled.textarea`
  ${InputStyles}
  min-height: 140px;
  resize: vertical;
`;

const FloatingLabel = styled.label<{ active: boolean }>`
  position: absolute;
  top: ${({ active }) => (active ? "4px" : "50%")};
  left: 14px;
  font-size: ${({ active }) => (active ? "0.75rem" : "1rem")};
  color: ${({ active }) => (active ? "#0070f3" : "#aaa")};
  pointer-events: none;
  transform: translateY(${({ active }) => (active ? "0" : "-50%")});
  transition: all 0.3s ease;
  background-color: white;
  padding: 0 4px;
`;

const Button = styled(motion.button)`
  background: #0070f3;
  color: white;
  font-size: 1.1rem;
  padding: 14px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  align-self: center;
  width: 100%;
  max-width: 220px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgb(0 112 243 / 0.5);
  transition: background-color 0.3s ease;

  &:hover {
    background: #005bb5;
  }

  &:focus {
    outline: 3px solid #80bfff;
  }
`;

const SuccessMessage = styled.p`
  color: #0a8f08;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  color: #d00000;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
`;

const DownloadButton = styled(Button)`
  background: #222;
  box-shadow: none;

  &:hover {
    background: #444;
  }
`;

export default function ContactMe() {
  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValid =
    form.name.trim().length > 1 &&
    validateEmail(form.email) &&
    form.message.trim().length > 4;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const downloadCV = () => {
    const fileURL = "/updated_RSM.pdf";
    const anchor = document.createElement("a");
    anchor.href = fileURL;
    anchor.download = "updated_RSM.pdf";
    anchor.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setStatus("error");
      setErrorMsg("Please fill in all fields correctly.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    try {
      // Simulate async sending, replace with real API or email service later
      await new Promise((res) => setTimeout(res, 1500));

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <MainContainer>
      {/* Get in Touch Section */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Heading>Get in Touch</Heading>
        <Paragraph>
          I'd love to hear about what you&apos;re working on and how I could help.
          I&apos;m currently looking for new opportunities, preferably remote, but
          I&apos;m open to all possibilities.
        </Paragraph>
        <Links />
        <DownloadButton onClick={downloadCV} type="button" aria-label="Download my CV">
          Download CV
        </DownloadButton>
      </Section>

      {/* Contact Form Section */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Heading>Contact Me</Heading>
        <Form onSubmit={handleSubmit} noValidate>
          <FieldWrapper>
            <Input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={touched.name && form.name.trim() === ""}
              required
            />
            <FloatingLabel htmlFor="name" active={!!form.name}>
              Name
            </FloatingLabel>
            {touched.name && form.name.trim() === "" && (
              <ErrorMessage role="alert">Name is required</ErrorMessage>
            )}
          </FieldWrapper>

          <FieldWrapper>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={touched.email && !validateEmail(form.email)}
              required
            />
            <FloatingLabel htmlFor="email" active={!!form.email}>
              Email
            </FloatingLabel>
            {touched.email && !validateEmail(form.email) && (
              <ErrorMessage role="alert">Enter a valid email</ErrorMessage>
            )}
          </FieldWrapper>

          <FieldWrapper>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={touched.message && form.message.trim().length < 5}
              required
            />
            <FloatingLabel htmlFor="message" active={!!form.message}>
              Message
            </FloatingLabel>
            {touched.message && form.message.trim().length < 5 && (
              <ErrorMessage role="alert">Message must be at least 5 characters</ErrorMessage>
            )}
          </FieldWrapper>

          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "sending"}
            aria-busy={status === "sending"}
            aria-live="polite"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" && (
            <SuccessMessage role="alert">Message sent successfully! Thank you.</SuccessMessage>
          )}
          {status === "error" && errorMsg && (
            <ErrorMessage role="alert">{errorMsg}</ErrorMessage>
          )}
        </Form>
      </Section>
    </MainContainer>
  );
}

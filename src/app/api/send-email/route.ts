import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Email and message are required" });
  }

  try {
    await sgMail.send({
      to: "muzaffar5711181@gmail.com",  // your email
      from: "muzaffar5711181@gmail.com", // verified sender in SendGrid
      subject: `New message from ${email}`,
      text: message,
      html: `<p>${message}</p><p>From: ${email}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}

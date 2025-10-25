import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production', // true for 465, false for other ports
    auth: {
      user: 'injectedfirewall@gmail.com',
      pass: 'nlgn hdmi akfw fzgc',
    },
  });

  await transporter.sendMail({
    from: 'injectedfirewall@gmail.com',
    to,
    subject: 'Password Change',
    text: 'Reset Your Password within 10 Minutes', // plain‑text body
    html, // HTML body
  });
};

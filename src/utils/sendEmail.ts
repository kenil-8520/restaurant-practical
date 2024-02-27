import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendEmail = async (options: { to: string; subject: string; text: string }) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER as string || 'e5ab5f7c362e44',
      pass: process.env.EMAIL_PASS as string || '9ad45e3c129d78',
    },
  });

  const mailOptions = {
    from: 'test.infynno@gmail.com',
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;

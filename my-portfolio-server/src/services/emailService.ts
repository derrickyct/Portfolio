import nodemailer from 'nodemailer';

export const sendContactEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
) => {
  console.log('Preparing to send email...');

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Transporter created.');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Message from Portfolio Contact Form</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log('Successfully sent the email.');
  } catch (err) {
    console.error('Failed to send email:', err);
    throw err;
  }
};

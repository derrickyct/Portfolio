import { Router, Request, Response } from 'express';
import { sendContactEmail } from '../services/emailService';

const router = Router();

router.post('/contact', async (req: Request, res: Response) => {
  console.log('Received contact form submission');

  const { firstName, lastName, email, phone, message } = req.body;

  try {
    console.log('Trying to send email to:', email);

    await sendContactEmail(firstName, lastName, email, phone, message);

    res.status(200).json({ 
      message: 'Contact form submitted successfully!' 
    });
  } catch (err) {
    console.error('Error sending contact email: ', err);

    res.status(500).json({
      message: 'Failed to send email. Please try again later.'
    });
  }
});

export default router;

import { Router, Request, Response } from "express";

const router = Router();

router.post("/contact", (req: Request, res: Response) => {
  console.log("Received contact form submission", req);

  const { firstName, lastName, email, phone, message } = req.body;

  console.log("Contact submission:", { firstName, lastName, email, phone, message });

  res.status(200).json({ 
    message: "Contact form submitted successfully!" 
  });
});

export default router;

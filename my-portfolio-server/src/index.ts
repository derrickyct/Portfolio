import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact';
import codeSnippet from './routes/codeSnippet'

const PORT = 3000;

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_BASE_URL,
  credentials: true,
}));

app.use(express.json());

app.use('/api', contactRoutes);
app.use('/api', codeSnippet);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

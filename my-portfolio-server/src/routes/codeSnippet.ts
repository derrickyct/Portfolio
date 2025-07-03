import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/snippet/:project/:filename', (req: Request, res: Response) => {
  const { project, filename } = req.params;
  const filePath = path.join(__dirname, `../snippets/${project}/${filename}`);

  try {
    console.log("Retrieving code snippet");
    
    const snippet = fs.readFileSync(filePath, 'utf-8');
    res.json({ 
      code: snippet 
    });
  } catch (err) {
    console.error('Error reading snippet file:', err);
    
    res.status(500).json({ 
      error: 'Could not load code snippet.' 
    });
  }
});

export default router;

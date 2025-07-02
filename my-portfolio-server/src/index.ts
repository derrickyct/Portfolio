import express from "express";
import contactRoutes from "./routes/contact";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
// Middleware to parse JSON
app.use(express.json());

// Use your routes
app.use("/api", contactRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

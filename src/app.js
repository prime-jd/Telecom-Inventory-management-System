import express from 'express';  
import dotenv from 'dotenv';
import router from './routers/require.router.js';

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Express Server!");
  });
  app.use(express.json()); // Middleware to parse JSON bodies

  // Your existing route
  app.use("/api/v1/user", router);
  
  // Start the server on port 8000
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
  });
export { app };
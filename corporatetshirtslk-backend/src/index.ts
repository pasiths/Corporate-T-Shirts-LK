import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { IP, PORT } from "./secrets";

const app: Express = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Hello from API",
  });
});


app.listen(PORT, IP,() => {
  console.log(`Server is running on http://${IP}:${PORT}`);
});

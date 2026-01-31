import cors from "cors";
import dotenv from "dotenv";
import salesRoutes from "./routes/sales.routes.js";
import express, {
  type Application,
  type Request,
  type Response,
} from "express";

dotenv.config();

const app: Application = express();

// Middleware
app.use(
  cors({
    origin: ["https://crm-three-iota-45.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/sales", salesRoutes);

// Health check
// Health check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    service: "Sales API",
  });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl || req.path} not found`,
  });
});

export default app;

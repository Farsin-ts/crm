import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import salesRoutes from './routes/sales.routes.js';

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/sales', salesRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'Sales API'
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl || req.path} not found`
  });
});

export default app;

// import express,{ Request,Response} from 'express'

// const app = express()

// app.get('/', (req: Request,res: Response) => {
//   res.send('Hello world')
// })

// export default app;
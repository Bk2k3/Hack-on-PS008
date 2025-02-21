import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import challengeRoutes from './routes/challengeRoutes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Your client's URL
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
  })
);

app.use(helmet());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/challenges', challengeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import { json, urlencoded } from "body-parser";
import connectDB from "./config/db.config";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import authRoutes from "./routes/auth.routes";
import candidateRoutes from "./routes/candidate.routes";
import questionRoutes from "./routes/question.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(loggerMiddleware);

app.use("/api/auth", authRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/questions", questionRoutes);

app.use(errorHandler);

connectDB();

export default app;

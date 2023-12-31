// App entry point
import express from "express";
// Log requests to console
import morgan from "morgan";
// Get cookies from request
import cookieParser from "cookie-parser";
// Enable cors
import cors from "cors";
// Get json data from request
import bodyParser from 'body-parser';

// Routes
import authRoutes from "./routes/auth.routes.js";
import dataRoutes from "./routes/data.routes.js";
import eventRoutes from "./routes/event.routes.js";
import proposalRoutes from "./routes/proposal.routes.js";
import userRoutes from "./routes/user.routes.js";

// Instance of express
const app = express();
// Increase payload size
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// Enable cors
app.use(cors({ origin: 'http://localhost:5173' }))
// Register middlewares
app.use(morgan("dev"));
// Get json data from request
app.use(express.json());
// Get cookies from request
app.use(cookieParser());
// Routes
app.use("/api", authRoutes);
app.use("/api", eventRoutes);
app.use("/api", userRoutes);
app.use("/api", dataRoutes);
app.use("/api", proposalRoutes);

export default app;
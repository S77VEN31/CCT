// App entry point
import express from "express";
// Log requests to console
import morgan from "morgan";
// Get cookies from request
import cookieParser from "cookie-parser";

// AuthRoutes
import authRoutes from "./routes/auth.routes.js"

// Instance of express
const app = express();

// Register middlewares
app.use(morgan("dev"));
// Get json data from request
app.use(express.json());
// Get cookies from request
app.use(cookieParser());
// Routes
app.use("/api", authRoutes);

export default app;
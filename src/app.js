import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// AuthRoutes
import authRoutes from "./routes/auth.routes.js"

// Instance of express
const app = express();

// Register middlewares
app.use(morgan("dev"));
// Get json data from request
app.use(express.json());
// Get url encoded data from request
app.use("/api", authRoutes);
// Get cookies from request
app.use(cookieParser());

export default app;
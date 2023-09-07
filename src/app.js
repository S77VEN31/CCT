import express from "express";
import morgan from "morgan";

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

export default app;
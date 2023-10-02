// App entry point
import express from "express";
// File upload
import fileUpload from "express-fileupload";
// Log requests to console
import morgan from "morgan";
// Get cookies from request
import cookieParser from "cookie-parser";
// Enable cors
import cors from "cors";

// AuthRoutes
import authRoutes from "./routes/auth.routes.js"
import eventRoutes from "./routes/event.routes.js"
import userRoutes from "./routes/user.routes.js"
// Instance of express
const app = express();
const uploadOptions = {
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
};
app.use(fileUpload(uploadOptions));
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
export default app;
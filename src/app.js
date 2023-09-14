// App entry point
import express from "express";
// Log requests to console
import morgan from "morgan";
// Get cookies from request
import cookieParser from "cookie-parser";

// AuthRoutes
import authRoutes from "./routes/auth.routes.js"
import eventRoutes from "./routes/event.routes.js"
// Instance of express
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// Register middlewares
app.use(morgan("dev"));
// Get json data from request
app.use(express.json());
// Get cookies from request
app.use(cookieParser());
// Routes
app.use("/api", authRoutes);
app.use("/api", eventRoutes);
export default app;
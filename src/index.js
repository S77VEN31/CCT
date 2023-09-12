// Initialize express app
import app from "./app.js";
// Connect to DB
import { connect } from "./db.js";
// Start server
app.listen(3000);
// Connect to DB
connect();
// Log message
console.log("Server running on port 3000");
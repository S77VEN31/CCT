// Initialize express app
import app from "./app.js";
// Connect to DB
import { connect } from "./db.js";
// Start server
// Define the port to listen on, using the PORT environment variable or default to 3000
const port = process.env.PORT || 3000;
// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// Connect to DB
connect();
// Log message
console.log("Server running");
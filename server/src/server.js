require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

// Initialize Express
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files (for uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/designs", require("./routes/designRoutes"));

// Static Files (if serving React build)
app.use(express.static(path.join(__dirname, "../client/build")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Server Error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

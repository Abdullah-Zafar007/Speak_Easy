
const express = require("express");
const cors = require("cors");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// ✅ Define allowed origins
const allowedOrigins = [
  "https://speakeasy-production-c15b.up.railway.app",
  "http://localhost:8080"
];

// ✅ Apply CORS specifically for this router
router.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed from this origin"));
    }
  },
  credentials: true
}));

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

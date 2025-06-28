const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// ✅ Add this BEFORE module.exports
router.get("/test", (req, res) => {
  res.send("✅ userRoutes working");
});

module.exports = router;

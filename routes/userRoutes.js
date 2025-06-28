const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// ✅ TEST ROUTE
router.get("/test", (req, res) => {
  res.send("✅ userRoutes working");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

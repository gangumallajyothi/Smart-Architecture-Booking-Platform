const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({ email, password });
    await user.save();

    res.json({ message: "User Registered Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
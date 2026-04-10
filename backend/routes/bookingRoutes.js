const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST booking
router.post("/", async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Booking saved", booking });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error saving booking" });
  }
});

// GET all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

module.exports = router;
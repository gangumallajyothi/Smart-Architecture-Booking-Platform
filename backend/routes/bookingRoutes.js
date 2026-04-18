const express = require("express");
const router  = express.Router();
const Booking = require("../models/Booking");

// ✅ CREATE BOOKING (From Frontend Forms)
router.post("/", async (req, res) => {
  try {
    const { userName, userEmail, projectType, status, date } = req.body;
    
    if (!userName || !userEmail || !projectType) {
      return res.status(400).json({ error: "Missing required booking details" });
    }

    const newBooking = new Booking({
      userName,
      userEmail,
      projectType,
      status: status || "Pending",
      date: date || new Date()
    });

    await newBooking.save();
    res.status(201).json({ message: "✅ Booking successful!", booking: newBooking });

  } catch (err) {
    console.error("Booking Create Error:", err.message);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// ✅ GET ALL BOOKINGS (For Admin Dashboard)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: -1 });
    res.json(bookings);
  } catch (err) {
    console.error("Fetch Bookings Error:", err.message);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// ✅ DELETE BOOKING (For Admin Dashboard)
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Booking Deleted Successfully" });
  } catch (err) {
    console.error("Delete Booking Error:", err.message);
    res.status(500).json({ error: "Failed to delete booking" });
  }
});

module.exports = router;
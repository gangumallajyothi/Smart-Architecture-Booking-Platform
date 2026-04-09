const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userName: { type: String },
  userEmail: { type: String },
  projectType: { type: String },
  status: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
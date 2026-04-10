const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);

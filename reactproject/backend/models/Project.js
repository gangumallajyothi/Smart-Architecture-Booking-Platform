const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  type: String,
  status: String,
  revenue: Number
});

module.exports = mongoose.model('Project', projectSchema);

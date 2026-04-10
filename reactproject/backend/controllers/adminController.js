const User = require('../models/User');
const Project = require('../models/Project');
const Booking = require('../models/Booking');
const Message = require('../models/Message');

exports.getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const bookings = await Booking.countDocuments();
    const projects = await Project.countDocuments();
    const revenue = await Project.aggregate([{ $group: { _id: null, total: { $sum: '$revenue' } } }]);
    const activeProjects = await Project.countDocuments({ status: 'active' });
    const notifications = 0; // Placeholder
    res.json({ users, bookings, projects, revenue: revenue[0]?.total || 0, activeProjects, notifications });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user project');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveBooking = async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, { status: 'Approved' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, { status: 'Cancelled' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('from');
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard', adminController.getDashboardStats);
router.get('/users', adminController.getUsers);
router.delete('/users/:id', adminController.deleteUser);
router.get('/projects', adminController.getProjects);
router.post('/projects', adminController.addProject);
router.delete('/projects/:id', adminController.deleteProject);
router.get('/bookings', adminController.getBookings);
router.post('/bookings/:id/approve', adminController.approveBooking);
router.post('/bookings/:id/cancel', adminController.cancelBooking);
router.get('/messages', adminController.getMessages);

module.exports = router;

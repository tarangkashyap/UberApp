const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('fullname.firstname').isLength().withMessage("First name is required"),
    body('email').isEmail().withMessage("Invalid email address"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body('vehicle.color').isLength().withMessage("Vehicle color is required"),
    body('vehicle.plate').isLength().withMessage("Vehicle plate is required"),
    body('vehicle.capacity').isNumeric().withMessage("Vehicle capacity must be a number"),
    body('vehicle.vehicleType').isIn(["car", "bike", "auto"]).withMessage("Invalid vehicle type"),
],
  captainController.registerCaptain
)

router.post('/login', [
    body('email').isEmail().withMessage("Invalid email address"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)

module.exports = router;

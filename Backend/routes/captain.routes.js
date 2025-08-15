const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
// ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         const captain = new captainModel(req.body);
//         await captain.save();
//         res.status(201).json({ message: "Captain registered successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

module.exports = router;

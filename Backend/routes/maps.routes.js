const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { query } = require('express-validator');
const { getCoordinate, getDistanceAndTime, getAutoCompleteSuggestions } = require('../controllers/map.controller');

router.get('/get-coordinates', 
    query('address').isString().isLength({ min: 3 }).withMessage('Address is required'),
    authMiddleware.authUser,
    getCoordinate
);


router.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }).withMessage('Origin is required'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Destination is required'),
    authMiddleware.authUser,
    getDistanceAndTime
);

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 1 }).withMessage('Input is required'),
    authMiddleware.authUser,
    getAutoCompleteSuggestions
);

module.exports = router;

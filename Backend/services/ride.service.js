const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');

async function getFare(pickup, destination,) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required to calculate fare');
    }

    const distanceTime = await mapService.getDistanceAndTime(pickup, destination);
    const baseFare = {
        car: 50,
        auto: 30,
        bike: 20
    };

    const perKmRate = {
        car: 12,
        auto: 8,
        bike: 5
    };

    const perMinRate = {
        car: 2,
        auto: 1.5,
        bike: 1
    };

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinRate.car)),
        bike: Math.round(baseFare.bike + ((distanceTime.distance.value / 1000) * perKmRate.bike) + ((distanceTime.duration.value / 60) * perMinRate.bike))
    };

    return fare;
    
}

module.exports.getFare = getFare;

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1),
         Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({ 
    user, pickup, destination, vehicleType
}) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All parameters are required to create a ride');
    }

    const fare = await getFare(pickup, destination);

    const ride = await rideModel.create({
        userId: user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType]
    });
    return ride;
}

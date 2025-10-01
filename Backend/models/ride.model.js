const mongoose= require('mongoose');

const rideSchema= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
     captain:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Captain', 
    },
    pickup:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    fare:{
        type: Number,
        required: true  
    },

    status:{
        type: String,
        enum: ['pending','accepted', 'ongoing', 'completed', 'cancelled'],
        default: 'pending',
    },
    distance:{
        type: String,
    },// in meters
    duration:{
        type: String,
    },// in seconds
    paymentID:{
        type:String,
    },
    orderID:{
        type: String,
    },
    signature:{
        type: String,
    },
    otp:{
        type: String,
        select:false,
        required: true,
    },
   
});

module.exports = mongoose.model('Ride', rideSchema);


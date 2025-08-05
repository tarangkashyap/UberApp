const mongoose = require('mongoose');
const dotenv = require('dotenv');

function connectTodb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("Database connected"))
    .catch(err => console.error("Database connection error:", err));
}

module.exports = connectTodb;
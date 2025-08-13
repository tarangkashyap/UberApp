
const userModel = require('../models/user.model');

module.exports.createUser = async({
    firstname, lastname, email, password
}) =>{
    if(!firstname || !email || !password){
        throw new Error("Please provide all required fields");
    }
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: hashedPassword
    });
    return user;
}
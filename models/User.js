var mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

var UserSchema = new mongoose.Schema({
    externalId:{type:String, default: uuidv1()},
    firstName: String,
    middleName: String,
    lastName: String,
    email:String,
    age: Number,
    gender: String,
    phone: Number,
    role: String,
    created_date: { type: Date, default: Date.now },
    address: {
        street_1: String,
        street_2: String,
        unit: String,
        city: String,
        country: String,
        zipcode: String
    }
});

module.exports = mongoose.model('User', UserSchema);
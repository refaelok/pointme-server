const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const R = require('ramda');
const config = require('./config');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email!'
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    tokens: [{
        access:{
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UsersSchema.methods.toJSON = function() {
    const userObject = this.toObject();

    return R.pick(['email'], userObject);
};

module.exports = mongoose.model('Users', UsersSchema);

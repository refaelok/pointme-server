const firebase = require('firebase');
const config = require('../../config');
const errorCodes = require('../../errorCodes');
const UsersModel = require('../../models/Users');

exports.createUserWithEmailAndPassword = async function(req, res) {
    const userModel = new UsersModel(req.body);
    const token = userModel.generateAuthToken();

    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password);
        console.log(response);
        await userModel.save();
        res.header('x-auth', token).send(userModel.toJSON());
    } catch(err) {
        res.status(403).json(errorCodes.GENERAL_ERROR);
    }
};

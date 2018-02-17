const firebase = require('firebase');
const {throwError, errorCodes, uniqueErrorCodes} = require('../../helpers/errorHandler');
const UsersModel = require('../../models/Users');

exports.createUserWithEmailAndPassword = async function(req, res) {
    try {
        const userModel = new UsersModel(req.body);
        const user = await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password);
        await userModel.save();
        user.sendEmailVerification();
        res.header('x-auth', token).send(userModel.toJSON());
    } catch (err) {
        throwError(res, 403, err, errorCodes.GENERAL_ERROR, uniqueErrorCodes.error_1000);
    }
};

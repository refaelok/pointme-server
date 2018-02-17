const ErrorHandlerModel = require('../../models/ErrorHandler');

module.exports = {
    throwError: async function(res, status, error, errorCode, uniqueErrorCode) {
        console.error(error);
        console.error('unique code', uniqueErrorCode);

        const errorHandler = new ErrorHandlerModel({date: Date.now(), uniqueErrorCode, error});

        errorHandler.save();
        res.status(status).json(errorCode);
    },

    uniqueErrorCodes: {
        error_1000: 1000,
    },

    errorCodes: {
        GENERAL_ERROR: "GENERAL_ERROR"
    }
};



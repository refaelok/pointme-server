const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ErrorHandlerSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    uniqueErrorCode: {
        type: Number,
        required: true
    },
    error: {
        type: Object
    },
});

module.exports = mongoose.model('ErrorHandler', ErrorHandlerSchema);

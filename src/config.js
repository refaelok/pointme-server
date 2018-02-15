const config = {
    mongo: {
        dbUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Pointme',
    },
    server: {
        port: process.env.PORT || 9002
    }
};

module.exports = config;

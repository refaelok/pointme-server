const config = {
    mongo: {
        dbUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Pointme',
    },
    server: {
        port: process.env.PORT || 9002
    },
    firebase: {
        config: {
            apiKey: 'AIzaSyDmsewlkpCCiIGmuwK6BcONw_Qt-Drau8U',
            authDomain: 'pointme-842a5.firebaseapp.com',
            databaseURL: 'https://pointme-842a5.firebaseio.com',
            projectId: 'pointme-842a5',
            storageBucket: 'pointme-842a5.appspot.com',
            messagingSenderId: '480080051839'
        }
    }
};

module.exports = config;

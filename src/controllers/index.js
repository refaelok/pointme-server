/**
 * Main application routes
**/

const baseAPI = '/api';

const user = {
    uri: `${baseAPI}/users`,
    controller: require('./Users')
};

module.exports = function(app) {
    app.use(user.uri, user.controller);
};

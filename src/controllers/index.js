/**
 * Main application routes
**/

const baseAPI = '/api';

const todo = {
    uri: `${baseAPI}/todo`,
    api: require('./todo')
};

module.exports = function(app) {
    app.use(todo.uri, todo.api);
};

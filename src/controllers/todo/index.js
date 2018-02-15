const {Router} = require('express');
const controller = require('./todo.controller');

const router = new Router();

router.get('/', controller.getAll);

module.exports = router;

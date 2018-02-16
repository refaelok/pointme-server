/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /users/create-user-with-email-and-password                   ->  create
 */

const {Router} = require('express');
const controllers = require('./users.controller');

const router = new Router();

router.post('/create-user-with-email-and-password', controllers.createUserWithEmailAndPassword);

module.exports = router;

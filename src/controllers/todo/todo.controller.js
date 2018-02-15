/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /posts               ->  getAll
 */

const Todo = require('../../models/todo');

exports.getAll = async function (req, res) {

    const newTodo = new Todo({
        text: 'Cook dinner',
        completed: true,
        completedAt: 123
    });

    try {
        const response = await newTodo.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }

};



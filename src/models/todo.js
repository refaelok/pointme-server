const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const TodoSchema   = new Schema({
	text: String,
	completed: Boolean,
	completedAt: Number
});

module.exports = mongoose.model('Todo', TodoSchema);

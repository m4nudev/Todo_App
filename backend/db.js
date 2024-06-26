const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://manudev912:uEUTunn4VBmC2VHb@cluster0.uhz8zxn.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
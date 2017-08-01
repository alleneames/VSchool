let mongoose = require("mongoose");
let Schema = mongoose.Schema;



let todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    dateDue: {
        type: Date,
        default: Date.now
    },
    price: Number

});

module.exports = mongoose.model("todolist", todoSchema)
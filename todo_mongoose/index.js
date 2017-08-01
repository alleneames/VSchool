let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

let todoRouter = require("./routes/todo_route.js");

mongoose.connect("mongodb://localhost:27017/todos");

let app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/todo", todoRouter);

app.listen(PORT, ()=> {
    console.log(`starting server on port ${PORT}`);
})




// let newTodo = new Todo({
//     title: "Connect Mongoose to database", 
//     description: "Listen to Jacob"
// });

// newTodo.save((err, data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("item was saved");
//         console.log(data);
//     }
// });


// Todo.findOne({_id: "5980b6058665de09126dc7b3"}, (err, data)=>{
//     if(err) {
//         console.log(err, data);
//     } else {
//         console.log("data found by id");
//         console.log(data);
//     }
// });

// Todo.findByIdAndRemove("5980b6058665de09126dc7b3", (err, data)=>{
//     if(err) {
//         console.log(err, data);
//     }else{
//         console.log("removal success");
//         console.log(data);
//     }
// });

// let newData = {
//     title: "Being awesome",
//     description: "touchless"
// }

// Todo.findByIdAndUpdate("5980c0de0b4aa80d8abb5a70", newData, {new:true}, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("update success");
//         console.log(data);
//     }
// });

// Todo.find({}, (err, data)=> {
//     if(err) {
//         console.log(err, data);
//     } else {
//         console.log("data found");
//         console.log(data)
//     }
// });


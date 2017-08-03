let express = require("express");

let todoRouter = express.Router();

let Todo = require("../models/todo.js");

//middleWare to query strings so that it can be called regardless of capitilzations. 
todoRouter.use((req, res, next)=>{
    for(let key in req.query) {
        if(typeof req.query[key] === "string") {
            req.query[key] = req.query[key].toLowerCase();
        }
    }
    next();
});

todoRouter.route("/")
.get((req, res)=> {
    Todo.find(req.query, (err, data)=>{
        if(err) {
            res.status(500).send({
                "message": "Error within server", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})
.post((req, res)=>{
   let newTodo = new Todo(req.body);
   newTodo.save((err, data)=>{
        if(err){
            res.status(500).send({"message": "Error with server", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data})
        }
   })
})

todoRouter.route("/:id")
.get((req, res)=>{
    Todo.findOne({"_id": req.params.id}, (err, data)=>{
        if(err){
            res.status(500).send({"message": "Error with server", err});
        } else if(data === null){
           res.status(404).send({"message": "Not found", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})
.delete((req, res)=>{
   Todo.findByIdAndRemove(req.params.id, (err, data)=>{
       if(err){
           res.status(500).send({"message": "Error with server", err});
       } else if (data === null){
           res.status(404).send({"message": "Not found", err});
       } else {
           res.status(200).send({"message": "SUCCESS", data});
       }
   })
})
.put((req, res)=>{
    Todo.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, data)=>{
        if (err) {
            res.status(500).send({"message": "Error with server", err});
        } else if (data === null) {
            res.status(404).send({"message": "Not found", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data})
        }
    })
});

module.exports = todoRouter
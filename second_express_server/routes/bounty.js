let express = require("express");
let bountyRouter = express.Router();

let Bounty = require("../models/bounty.js");

bountyRouter.use((req, res, next)=>{
    for(let key in req.query) {
        if(typeof req.query[key] === "string") {
            req.query[key] = req.query[key].toLowerCase();
        }
    }
    next();
});

bountyRouter.route("/")

.get((req, res)=>{
    Bounty.find(req.query, (err, data)=>{
        if(err){
            res.status(500).send({"message": "SERVER FAILED", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})

.post((req, res)=>{
    let newBounty = new Bounty(req.body);
    newBounty.save((err, data)=>{
        if(err){
            res.status(500).send({"message": "SERVER FAILED"});
        } else {
            res.status(200).send({"message": "SUCCESS"});
        }
    })
})

bountyRouter.route("/:id")
.get((req, res)=>{
    Bounty.findOne({"_id": req.params.id}, (err, data)=>{
        if(err){
            res.status(500).send({"message": "SERVER FAILED", err});
        } else if(data === null) {
            res.status(404).send({"message": "NOT FOUND", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})

.delete((req, res)=>{
    Bounty.findByIdAndRemove(req.params.id, (err, data)=>{
        if(err){
            res.status(500).send({"message": "SERVER FAILED"});
        } else if(data === null) {
            res.status(404).send({"message": "NOT FOUND"});
        } else {
            res.status(200).send({"message": "SUCCESS"});
        }
    })
})

.put((req, res)=>{
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data)=>{
        if(err){
            res.status(500).send({"message": "SERVER FAILED"});
        } else if(data === null) {
            res.status(404).send({"message": "NOT FOUND"});
        } else {
            res.status(200).send({"message": "SUCCESS"});
        }
    })
})

module.exports = bountyRouter;
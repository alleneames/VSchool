let express = require("express");

let chatRouter = express.Router();

let Chat = require("../models/chat.js");

chatRouter.get("/", (req, res) => {
    Chat.find({}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "internal error", err});
        } else {
            res.status(200).send({"message": "success", data});
        }
    })
})

module.exports = chatRouter;
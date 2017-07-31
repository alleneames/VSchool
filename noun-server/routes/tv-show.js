
//import express
let express = require("express");

let uuid = require("uuid/v1");

//make a mini express app called a router
let tvShowRouter = express.Router();

let tvShows = [
];

tvShowRouter.get("/", (req, res)=>{
    console.log(req.query)
    let search = tvShows.filter((tvShow)=>{
        for(let key in req.query) {
            if(req.query[key] != tvShow[key]) {
                return false
            }
        }
        return true
    })
    res.status(200).send({"message": "SUCCESS", data: search})
});

tvShowRouter.post("/", (req, res)=>{
    let newShows = req.body;
    newShows.id = uuid();
    tvShows.push(newShows);
    res.status(200).send({"message": "SUCCESS"})
});

tvShowRouter.get("/:id", (req, res)=>{
    for(let i = 0; i < tvShows.length; i++) {
        if(tvShows[i].id === req.params.id) {
            return res.status(200).send(tvShows[i]);
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

tvShowRouter.delete("/:id", (req, res)=>{
    for(let i = 0; i < tvShows.length; i++) {
        if(tvShows[i].id === req.params.id) {
            tvShows.splice(i, 1);
            return res.status(200).send({
                message: "DELETE SUCCESSFUL"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
});

tvShowRouter.put("/:id", (req, res)=>{
    for(let i = 0; i < tvShows.length; i++) {
        if(tvShows[i].id === req.params.id) {
            for(let key in req.body) {
                if(tvShows[i].hasOwnProperty(key)) {
                    tvShows[i][key] = req.body[key];
                }
            }
            return res.status(200).send({
                message: "UPDATE SUCCESSFULL"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

module.exports = tvShowRouter
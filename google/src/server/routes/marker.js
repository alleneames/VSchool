let express = require("express");
let markerRouter = express.Router();

let Marker = require("../models/marker.js");

markerRouter.get("/", (req, res)=> {
    Marker.find({}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "ERROR", err});
        } else {
            res.status(200).send({"message": "HERE ARE YOUR MARKERS", data});
        }
    });
});

markerRouter.post("/", (req, res)=> {
    let newMarker = new Marker(req.body);
    newMarker.save((err, data)=> {
            if(err) {
                res.status(500).send({"message": "ERROR", err});
            } else {
                res.status(200).send({"message": "SUCCESS", data});
            }
    });
});

markerRouter.put("/:id", (req, res)=> {
    Marker.findOneAndUpdate({"_id": req.params.id}, {$set: req.body}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "error", err});
        } else {
            res.status(201).send({"message": "SUCCESS", data})
        }
    });
});

markerRouter.delete("/:id", (req, res)=> {
    Marker.findByIdAndRemove({"_id": req.params.id}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "ERROR", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data})
        }
    });
});

module.exports = markerRouter;
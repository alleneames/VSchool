let express = require("express");

let teamRoute = express.Router();

let uuid = require("uuid/v1");

let teams = [
    {
        _id: uuid(),
        name: "Jazz",
        location: "Utah",
        sport: "Basketball",
    },
     {
         _id: uuid(),
        name: "Cowboys",
        location: "Dallas",
        sport: "Football"
    },
    {
        _id: uuid(),
        name: "Real",
        location: "Utah",
        sport: "Soccor"
    }
]

teamRoute.route("/")
    .get((req, res)=>{
        res.send(teams.filter((team)=>{
            for(let key in req.query) {
                if(req.query[key] != team[key]) {
                    return false
                }
            }
            return true
        }));
    })
    .post((req, res)=>{
        let template = {
            name: "",
            location: "",
            sport: ""
        };

        for(let key in req.body) {
            if(!template.hasOwnPropery(key)) {
                continue;
            } else {
                template[key] = req.body[key]
            }
        }
        req.body._id = uuid();
        teams.push(req.body);
        res.status(200).send({message: "SUCCESS"});
    })

teamRoute.route("/:id")
.get((req, res)=>{
    for(let i = 0; i < teams.length; i++) {
        if(teams[i]._id === req.params.id) {
            return res.status(200).send(teams[i])
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})
.delete((req, res)=>{
    for(let i = 0; i < teams.length; i++) {
        if(teams[i]._id === req.params.id) {
            teams.splice(i, 1);
            return res.status(200).send({
                message: "SUCCESS"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})
.put((req, res)=>{
    for(let i = 0; i < teams.length; i++) {
        if(teams[i]._id === req.params.id) {
            for(let key in req.body) {
                if(teams[i].hasOwnProperty(key)) {
                    teams[i][key] = req.body[key];
                }
            }
            return res.status(200).send({
                message: "SUCCESS"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})
module.exports = teamRoute;
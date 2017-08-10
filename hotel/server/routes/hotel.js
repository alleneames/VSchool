let express = require("express");
let hotelRouter = express.Router();
let expressJwt = require("express-jwt");
let settings= require("../config/settings.js");
let authorization = expressJwt({secret: settings.secret});

hotelRouter.get("/events", (req, res)=> {
    res.status(200).send({"message": "HERE ARE THE EVENTS AT THE HOTEL", data: []});
})

hotelRouter.get("/guests", authorization, (req, res)=> {
    res.status(200).send({"message": "HERE ARE THE GUESTS AT THE HOTEL", data: []});
});

module.exports = hotelRouter;
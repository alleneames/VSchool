let express = require("express");
let hotelRouter = express.Router();
let expressJwt = require("express-jwt");
let settings= require("../config/settings.js");
let authorization = expressJwt({secret: settings.secret});

hotelRouter.get("/events", (req, res)=> {
    res.status(200).send({"message": "HERE ARE THE EVENTS AT THE HOTEL", data: [
    {
        checkIn: "11:00 AM",
        checkOut: "4:00 PM",
        title: "Breakfast",
        description: "French Toast"
    },
    {
        checkIn: "11:00 AM",
        checkOut: "4:00 PM",
        title: "Lunch",
        description: "Hamburgers" 
    }
 ]
});
});

hotelRouter.get("/guests", authorization, (req, res)=> {
    res.status(200).send({"message": "HERE ARE THE GUESTS AT THE HOTEL", data: [
        {
            firstName: "Caleb",
            lastName: "Black",
            roomNumber: 4
        },
        {
            firstName: "Sarah",
            lastName: "Baldwin",
            roomNumber: "Penthouse Suite"
        }
    ]
    });
});

module.exports = hotelRouter;
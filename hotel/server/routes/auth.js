let express = require("express");
let authRouter = express.Router();

//import settings
let settings = require("../config/settings.js");


//import model
let User = require("../models/user.js");

let passport = require("passport");
let Strategy = require("passport-local");

let jwt = require("jsonwebtoken");

passport.use(new Strategy((username, password, done)=> {
    User.findOne({username}, (err, currentUser)=> {
        if(err) {
            done(err, false);
        } else if(currentUser === null) {
            done(null, false);
        } else {
            currentUser.auth(password, (isCorrect)=> {
                if(isCorrect) {
                    done(null, true);
                } else {
                    done(null, false);
                }
            });
        }
    });
}));

//startup passport
authRouter.use(passport.initialize());

//login a user
authRouter.post("/login", passport.authenticate("local", {session: false}), (req, res)=> {
    User.findOne({username: req.body.username}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "ERROR"});
        } else if(data === null) {
            res.status(404).send({"message": "NO USER FOUND"});
        } else {
            let payload = { username: data.username };
            res.status(201).send({
                "message": "SUCCESS: Auth token issued", 
                "token": jwt.sign(payload, settings.secret, {expiresIn: 3000})
        });
        }
    })
})

//post users
authRouter.post("/signup", (req, res)=> {
    let makeUser = new User(req.body);
    makeUser.save((err, data)=> {
        if(err) {
            res.status(500).send({"message": "Err in system", err});
        } else {
            res.status(201).send({"message": `User was created: ${data.username}`})
        }
    });
});

module.exports = authRouter;
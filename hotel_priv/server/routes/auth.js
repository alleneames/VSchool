let express = require("express");
let authRouter = express.Router();
let expressJwt = require("express-jwt");

//import settings
let settings = require("../config/settings.js");

let authorization = expressJwt({secret: settings.secret})

let admin = require("../middleware/admin.js");


//import model
let User = require("../models/user.js");
let UserQue = require("../models/userQue.js");

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
    User.findOne({username: req.body.username}, (err, result)=> {
        if(err) {
            res.status(500).send({"message": "ERROR IN SYSTEM"});
        } else if(result !== null) {
            res.status(400).send({"message": "Username has been taken"});
        } else {
            let makeUser = new UserQue(req.body);
            makeUser.save((err, data)=> {
                if(err) {
                    res.status(500).send({"message": "Err in system", err});
                } else {
                    res.status(201).send({"message": `User was created: ${data.username}`})
                }
            });
        }
    });
});

authRouter.get("/userque", authorization, admin, (req, res)=> {
    UserQue.find({}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "ERROR IN SYSTEM"});
        } else {
            res.status(200).send({"message": "SUCCESS USER QUE", data})
        }
    });
});

authRouter.post("/user", authorization, admin, (req, res)=> {
    let newUser = new User(req.body);
    newUser.save((err, data)=> {
        if(err) {
            res.status(500).send({"message": "Err in system", err});
    } else {
            res.status(201).send({"message": `User was created: ${data.username}`})
    }
    })
})

authRouter.delete("/user", authorization, admin, (req, res)=> {
    User.findByIdAndRemove({_id: req.body._id}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "ERROR IN SYSTEM"});
        } else if(data === null) {
            res.status(404).send({"message": `User with id of ${data._id} was not found`});
        } else {
            res.status(200).send({"message": `User was deleted with username ${data._id}`})
        }
    })
})
module.exports = authRouter;
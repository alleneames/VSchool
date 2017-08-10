let mongoose = require("mongoose");
let rs = require("readline-sync");

let  User = require("./models/user.js");

mongoose.connect("mongodb://localhost: 27017/userexample");

let username = rs.question("Username: ");
let password = rs.question("password: ", {hideEchoBack: true});

// let createUser = new User ({
//     username,
//     password
// });

// createUser.save((err, data)=> {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("New user was saved", data);
//     }
// })

User.findOne({username}, (err, currentUser)=> {
    if(err) {
        console.log(err);
    } else if(currentUser === null) {
        console.log("user not found");
    } else {
        currentUser.auth(password, (isCorrect)=> {
            if(isCorrect) {
                console.log("Success");
            } else {
                console.log("Failure: Password is invalid");
            }
        });
    }
});



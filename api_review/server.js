let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let teamRoute = require("./routes/teams.js");

let app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/teams", teamRoute);



app.listen(PORT, ()=> {
    console.log(`starting server on port ${PORT}`)
})
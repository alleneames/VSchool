let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");


//import routes
let tvShowRouter = require("./routes/tv-show.js")

let app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/tv-shows", tvShowRouter);

//use our routes
app.use(tvShowRouter)


app.listen(PORT, ()=>{
    console.log(`starting server on port ${PORT}`);
})
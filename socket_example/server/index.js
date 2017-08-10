let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

let socketIO = require("socket.io");

let chatRouter = require("./routes/chat.js")

const PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use("/chat", chatRouter);

let server = app.listen(PORT, ()=> {
    console.log(`starting server on port ${PORT}`)
})

let io = socketIO(server);

io.on("connection", (socket)=> {
    console.log(`client has connected with id of ${socket.id}`);
})
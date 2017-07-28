let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let uuid = require("uuid/v1");

let app = express();
const PORT = process.env.PORT || 8080;

let tvShows = [
    {
        id: uuid(),
        name: "Game of Thrones",
        starring: ["Fake name 1", "Fake Name 2"],
        Genre: "Fantasy",
        stillLive: true 
    },
    {
        id: uuid(),
        name: "Strain",
        starring: ["Star Name 1, Star Name 2"],
        Genre: "Horror",
        stillLive: true
    }
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/tv-shows", (req, res)=>{
    console.log(req.query)
    let search = tvShows.filter((tvShow)=>{
        for(let key in req.query) {
            if(req.query[key] != tvShow[key]) {
                return false
            }
        }
        return true
    })
    res.status(200).send({"message": "SUCCESS", data: search})
});

app.post("/tv-shows", (req, res)=>{
    let newShows = req.body;
    newShows.id = uuid();
    tvShows.push(newShows);
    res.status(200).send({"message": "SUCCESS"})
});

app.get("/tv-shows/:id", (req, res)=>{
    for(let i = 0; i < tvShows.length; i++) {
        if(tvShows[i].id === req.params.id) {
            return res.status(200).send(tvShows[i]);
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

app.delete("/tv-shows/:id", (req, res)=>{
    for(let i = 0; i < tvShows.length; i++) {
        if(tvShows[i].id === req.params.id) {
            tvShows.splice(i, 1);
            return res.status(200).send({
                message: "DELETE SUCCESSFUL"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
});

app.put("/tv-shows/:id", (req, res)=>{
    for(let i = 0; i < tvShows.length; i++) {
        if(tvShows[i].id === req.params.id) {
            for(let key in req.body) {
                if(tvShows[i].hasOwnProperty(key)) {
                    tvShows[i][key] = req.body[key];
                }
            }
            return res.status(200).send({
                message: "UPDATE SUCCESSFULL"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

app.listen(PORT, ()=>{
    console.log(`starting server on port ${PORT}`);
})
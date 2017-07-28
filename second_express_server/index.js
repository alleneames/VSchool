let express = require("express");
let bodyParser = require("body-parser");
let cors= require("cors");
let uuid= require("uuid/v1");

let app = express();
const PORT = process.env.PORT || 8080;

let bountyArr = [
    {
        id: uuid(),
        name: "Kayne West",
        location: "his own planet",
        price: 1000,
        dead: false

    },
    {
        id: uuid(),
        name: "Kim Kardashian",
        location: "California",
        price: 60,
        dead: false 
    },
    {
        id: uuid(),
        name: "Donal Trump",
        location: "Washington",
        price: 50,
        dead: false  
    }
];

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors())


app.get("/", (req, res)=>{
    res.status(200).send({"message": "Success here is your data", data: bountyArr} )
});

app.post("/", (req, res)=>{
    let newBounty = req.body;
    newBounty.id = uuid();
    bountyArr.push(newBounty);
    res.status(200).send({"message": "Success data was posted"});
})

app.get("/:id", (req, res)=>{
    //loop through a data array
    for(let i = 0; i < bountyArr.length; i++) {
        if(bountyArr[i].id === req.params.id) {
            return res.status(200).send(bountyArr[i]);
        }
    }
    return res.status(404).send({
        message: "error not found"
    })
    //find the object by ._id that matches req.params.id
})

app.delete("/:id", (req, res)=>{
    //loop through the data
    for(let i = 0; i < bountyArr.length; i++) {
        if(bountyArr[i].id === req.params.id) {
            bountyArr.splice(i, 1);
            return res.status(200).send({
                message: "delete successful"
            })
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    })
})

app.put("/:id", (req, res)=>{
    for(let i = 0; i < bountyArr.length; i++){
        if(bountyArr[i].id === req.params.id) {
            for(let key in req.body){
                if(bountyArr[i].hasOwnProperty(key)) {
                    bountyArr[i][key] = req.body[key];
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
    console.log(`starting server on port ${PORT}`)
})
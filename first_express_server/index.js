let express = require("express");

let app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    res.status(200).send({"message": "success! You made your first express server!"});
});

app.listen(PORT, ()=>{
    console.log(`Starting server on port ${PORT}`);
})
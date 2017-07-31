let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

//url to connect to database -> mongo runs on port 27017
let url = "mongodb://localhost:27017/tv-shows";


//connect to db takes the url and a callback function
MongoClient.connect(url, (err, db)=> {
    if(err) {
        console.log("error in running mongodb", err)
    } else {
        console.log("success");
        let tvShows = db.collection("tv-shows");
        tvShows.find({}).toArray((err, data)=>{
            if(err) {
                console.log(err);
            }
            console.log(data);
            db.close();
        });
        // tvShows.insertOne({
        //     name: "Jacob",
        //     color: "Brown",
        //     age: 82
        // }, (err, result)=>{
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log(results);
        //     }
        // });
        // tvShows.deleteOne({_id: new mongodb.ObjectID("597fb1c18c5dc527ff5c1382")}, (err, result)=>{
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log(result)
        //     }
        // })
    }
});
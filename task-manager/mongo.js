const { MongoClient } = require('mongodb');

// console.log(MongoClient)
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1
var url = "mongodb://127.0.0.1/27017/?directConnection=true"
var dataBase = "task-manager"

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        console.log(error);
    }
    else{
        // console.log(client)
        console.log("connected");

        const db = client.db(dataBase);
        // const collection = db.collection("tasks").updateOne({
        //     description: "Task 2"
        // }, {
        //     $set: {
        //         completed: false
        //     }
        // }).then(result => {
        //     console.log(result);
        // }).catch(error => {
        //     console.log(error);
        // })
        // ;

        // Delete data
        const collection = db.collection("tasks").deleteOne({
            description: "Task 1"
        }).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
        ;



        // inserting multiple entries into the database
        // collection.insertMany([
        //     {
        //         description: "Task 1",
        //         completed: false,
        //     },
        //     {
        //         description: "Task 2",
        //         completed: true,
        //     },
        //     {
        //         description: "Task 3",
        //         completed: false,
        //     }
        // ], (error, response) => {
        //     if(error) console.log(error);
        //     else console.log("Documents added")
        // })


        // Inserting into the database
        // collection.insertOne({
        //     name:"Mohim"
        // }, (error, response) => {
        //     console.log(response);

        //     console.log("response---------", response.ops);
        // })
        // // fetching data from database
        // db.collection("temp").find()
        // .toArray().then((ans) => {
        //     console.log(ans);
        // });
    }
})












// different way
// const { MongoClient, ServerApiVersion } = require("mongodb");

// // Replace the placeholder with your Atlas connection string
// const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri);

// MongoClient.connect(url).then((client) => {
  
//     const connect = client.db(databasename);
  
//     // Connect to collection
//     const collection = connect
//             .collection("temp");
  
//             console.log("collection")
//     // Fetching the records having 
//     // name as saini
//     collection.find({ "name": "momo" })
//         .toArray().then((ans) => {
//             console.log(ans);
//         });
// }).catch((err) => {
  
//     // Printing the error message
//     console.log("err.Message");
// })


// async function connect() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     const connection = await client.db("task-manager");
//     // console.log(connection);

//     const collection =  connection.collection("temp");
//     // console.log(collection)

//     connection.collection("temp").insertOne({"name": "newmomo"}, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//       });
//     // var data = collection.find({ "name": "momo" })
//     // console.log(data)
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// connect().catch(console.dir);

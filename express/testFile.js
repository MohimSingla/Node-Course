const express = require('express');

const app = express();

app.listen(3000, () => { 
    console.log("Server up and running.");
})

app.use(express.static(__dirname)); // specify file name => it will render 


app.get('/weather', (req, res)=> {
    var obj = {
        forecast: "Forecast data",
        location: "Random Locantion"
    }
    res.send(obj);
    console.log(req);
})


// app.get('/', (req, res)=> {
//     res.sendFile(__dirname+"/index.html");
//     console.log(req);
// })

// app.get('/help', (req, res)=> {
//     res.sendFile(__dirname+"/help.html");
//     console.log(req);
// })


// app.get('/about', (req, res)=> {
//     res.sendFile(__dirname+"/about.html");
//     console.log(req);
// })
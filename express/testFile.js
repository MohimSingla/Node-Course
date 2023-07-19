const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');


app.listen(3000, () => { 
    console.log("Server up and running.");
})
console.log(__dirname)
app.use(express.static(__dirname+"/../")); // specify file name => it will render 
hbs.registerPartials(__dirname+"/partials")

app.get('/weather', (req, res)=> {
    var obj = {
        forecast: "Forecast data",
        location: "Random Locantion"
    }
    res.send(obj);
})


app.get('/', (req, res)=> {

    res.render('index', {
        data: "Sending static data from main file",
        body: "This is a sample paragraph, sending static data from main file and rendering it in run-time."
    })
    // // res.sendFile(__dirname+"/index.html");
    // console.log(req);
})

app.get('/help', (req, res)=> {
    res.render('help', {
        data: "Help Section",
        body: "Welcome to help section. You'll have to help yourself :)"
    });
    // console.log(req);
})


app.get('/about', (req, res)=> {
    res.render('about', {
        data: "About Section",
        body: "Welcome to about section. I'm Dope."
    });
    // console.log(req);
})
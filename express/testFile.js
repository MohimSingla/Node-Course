const express = require('express');
const hbs = require('hbs');
const {weatherStackFunc, geoLoc} = require('../weather-App-Project/api.js')

const app = express();

app.set('view engine', 'hbs');


app.listen(3000, () => { 
    console.log("Server up and running.");
})
app.use(express.static(__dirname+"/../views")); // specify file name => it will render 
hbs.registerPartials(__dirname+"/partials")

app.get('/weather', (req, res)=> {
    
        res.send({location: "No Query"});
    
    
})


app.get('/', (req, res)=> {

    
    if(req.query.location)
    {
        geoLoc(req.query.location, (error, data) => { 
            weatherStackFunc(data[0], data[1], (error, data)=>{
                res.render('index', {error, data});
            })
        })
        // const obj = geoAddress(req.query.location);
        // console.log(obj);
        // res.render('index', obj);
    }
    else{
        const obj = {
            data: "Data Not Found",
            error: "Location not specified"
        };
        res.render('index', obj);
    }
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
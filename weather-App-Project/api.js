// api call file for app.js

const request = require('postman-request')

var url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoibW9oaW1zaW5nbGEiLCJhIjoiY2xrODUyamw2MGN1aTNncDYzaHdvYWJidSJ9.DJsJU9fXfA0cDeMINH2d6A"


const weatherStackFunc = (longitude, latitude, callback) => {
    // do nothing 

    const weatherstackAccessToken = "ceda7bfd005844b9da90b335b56278f9";
    var Query = "query="+latitude+","+longitude+"&units=f";
    var url = "http://api.weatherstack.com/current?access_key="+weatherstackAccessToken+"&"+Query;
    // console.log(url)
    // http://api.weatherstack.com/current?access_key = ceda7bfd005844b9da90b335b56278f9& query = London;Singapur;Shanghai


    request({url, json: true}, (error, response, body) => {
        if(error){
            console.log("f", error);
        }
        else{

            // const temp =response.body.current
            // console.log(response.body.current.temperature);
            var data = "It is currently " + response.body.current.temperature + " degrees. there is " + response.body.current.precip +" % chaces of rain.";
    
            callback(error, data)
        }
    })
}

const geoLoc = (location, callback) =>{
    const geoAccessToken = "pk.eyJ1IjoibW9oaW1zaW5nbGEiLCJhIjoiY2xrODUyamw2MGN1aTNncDYzaHdvYWJidSJ9.DJsJU9fXfA0cDeMINH2d6A";
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token="+geoAccessToken;
    const data = request({url, json: true}, (error, response) => {
        callback(error, response.body.features[0].center);
    })
}

module.exports = {weatherStackFunc, geoLoc};
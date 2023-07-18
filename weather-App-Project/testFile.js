const request = require('postman-request');

const weatherstackAccessToken = "ceda7bfd005844b9da90b335b56278f9";
var Query = "query=New York&units=f";

var url = "http://api.weatherstack.com/current?access_key="+weatherstackAccessToken+"&"+Query;
var url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibW9oaW1zaW5nbGEiLCJhIjoiY2xrODUyamw2MGN1aTNncDYzaHdvYWJidSJ9.DJsJU9fXfA0cDeMINH2d6A"


request({url, json: true}, (error, response, body) => {
    // console.log(response.body.current);
    // console.log(random);
    // console.log(response.request, response.request.data);
    console.log("It is currently " + response.body.current.temperature + " degrees. there is " + response.body.current.precip +" % chaces of rain.")
})

request({url: url2, json: true}, (error, response) => {
    if(error)
    {
        console.log("error caught");
    }
    else if (!response.body.features) // error handling
    {
        console.log("invalid input");
    }
    else{
        console.log(response.body.features[0].center);
    }
})
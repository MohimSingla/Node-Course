const request = require('postman-request')



const geoFunc = (location, callback) => {
    // do nothing 

    const weatherstackAccessToken = "ceda7bfd005844b9da90b335b56278f9";
    var Query = "query="+location+"&units=f";
    var url = "http://api.weatherstack.com/current?access_key="+weatherstackAccessToken+"&"+Query;


    request({url, json: true}, (error, response, body) => {
        var data = "It is currently " + response.body.current.temperature + " degrees. there is " + response.body.current.precip +" % chaces of rain.";

        callback(error, data)
    })
}

module.exports = geoFunc;
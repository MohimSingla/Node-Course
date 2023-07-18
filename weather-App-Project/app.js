// Accesing data through call back functions 


// 1. calling geolocation function
// 2. Calls geolocation API and returns latitude and longitude of the input region
// 3. Callsback a function containing weatherforcast api
// 4. WeatherStack API returns the forecasted data back 
// 5. Forecast data is printed
// Note: Error handling NOT IMPLEMENTED.


const {weatherStackFunc, geoLoc} = require('./api.js')

// weatherStackFunc("India", (error, data)=>{
//     console.log("a", error);

//     console.log("b", data);
// });

geoLoc("India", (error, data)=>{
    // console.log("c", error, data);
    weatherStackFunc(data[0], data[1], (error, data)=>{
        console.log("d", error, data);
    })
})


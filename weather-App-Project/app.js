// Accesing data through call back functions 


// 1. calling geolocation function
// 2. Calls geolocation API and returns latitude and longitude of the input region
// 3. Callsback a function containing weatherforcast api
// 4. WeatherStack API returns the forecasted data back 
// 5. Forecast data is printed
// Note: Error handling NOT IMPLEMENTED.




const yargs = require('yargs')
const {weatherStackFunc, geoLoc} = require('./api.js')


yargs.command({
    command: "find",
    handler: (loc) => {
        geoLoc(loc.location, (error, data)=>{
            // console.log("c", error, data);
            weatherStackFunc(data[0], data[1], (error, data)=>{
                console.log("error: ", error,"and data:",  data);
            })
        })
    },
    builder: {
        location: {
            describe: "location",
            demandOption: true,
        }
    },
    demandOption: true,
}).argv

// weatherStackFunc("India", (error, data)=>{
//     console.log("a", error);

//     console.log("b", data);
// });



// failed attempt
// const geoAddress =  (location) => {
//     var obj={};
//     console.log("geo Address function called");
//     geoLoc(location, (error, data)=>{
//         // console.log("c", error, data);
//         obj = weatherStackFunc(data[0], data[1], (error, data)=>{
//             console.log("error: ", error,"and data:",  data);
//             console.log(obj);
//             obj = {error, data};
//         }
        
        
//         )
//     })
//     console.log("data retrieved:" , obj)
//     return obj
// }

// module.exports = {geoAddress};




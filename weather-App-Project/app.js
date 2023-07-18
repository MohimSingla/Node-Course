// Accesing data through call back functions 

const weatherStackFunc = require('./api.js')

weatherStackFunc("India", (error, data)=>{
    console.log(error);
    console.log(data);
});
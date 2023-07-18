const geoFunc = require('./api.js')





geoFunc("India", (error, data)=>{
    console.log(error);
    console.log(data);
});
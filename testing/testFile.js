const express = require('express')

const app = express();

app.listen(3000, () => {
    console.log("Server is up and running.");
})
var i=1;
const next = (req,res,next) => {
    i=2;
    console.log("next temp middleware called");
    next()
}
const temp2 = (req,res,next) => {
    i=2;
    console.log("next  temp  2 middleware called");
    res.send("success")
}

app.use(next);

app.get('/', (req, res, next) => {
    // console.log(req);
    console.log(i)
    console.log(i);
    res.send("hey suppp?")
    next()
    // console.log(next, typeof(next), next());
})


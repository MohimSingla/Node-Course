const express = require('express')

const app = express();

app.listen(3000, () => {
    console.log("Server is up and running.");
})

const next = () => {
    console.log("next middleware called");
}

app.get('/', (req, res, next) => {
    // console.log(req);
    res.send("hey suppp?")

    console.log(next, typeof(next), next());
})
'use strict'

require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
const errorHandler = require("./src/error-handlers/500");
const notFound = require("./src/error-handlers/404");
const {record} =require("./src/models/index")
const recordRoutes = require('./src/routes/records');

app.get("/",(req,res)=>{
    res.send("server is alive");
})

app.use(recordRoutes);

function start(port) {
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
}
app.use(errorHandler);
app.use('*',notFound);
module.exports = {
    app: app,
    start: start
}
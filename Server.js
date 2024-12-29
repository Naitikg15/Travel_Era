// var prompt= require('prompt-sync')
//var fs= require('fs')
var os= require('os')

const express = require('express')
const app = express();

const db=require('./db');
const UserRouter=require("./routes/userRoutes")
const PlaceRouter=require("./routes/PlaceRoutes")
const FoodRouter=require("./routes/FoodRoutes")

const bodyParser=require('body-parser');
const { error } = require('console');
const { workerData } = require('worker_threads');
const Foods = require('./models/Foods');
app.use(bodyParser.json())

require('dotenv').config()

const PORT=process.env.PORT || 3000

//comment added 

var ab=os.userInfo()


app.get('/', (req, res)=> {
    res.send("Hello " + ab.username)
})



app.use('/', PlaceRouter)

app.use("/",UserRouter)

app.use('/',FoodRouter)

app.listen(PORT, ()=>{
    console.log("Server is Live")
})
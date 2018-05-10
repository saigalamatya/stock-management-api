const express = require("express");
const bodyParser = require("body-parser");
const morgan=require('morgan');
const cors=require('cors');
const router=express.Router();

// db connection
const mongoose=require('./db-connection/mongoose');

var app=express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//morgan to console user request
app.use(morgan('dev'))
app.use(cors());
const route = require("./route/appRoutes");

const port = 3000;


// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
//     next();
// });

app.use("/api", route);
// router.get("/",(req,res)=>{
//    res.status(200).json({
//        message:"ok"
//    })
// })



app.listen(port, () => {
    console.log(`server started at ${port}`);
})
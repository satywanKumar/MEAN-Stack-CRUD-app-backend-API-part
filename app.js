const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router/contact');



//mongodb connection
mongoose.connect('mongodb+srv://satywan:123@contactlist-hsvsd.mongodb.net/test?retryWrites=true',{useMongoClient:true});
mongoose.connection.on('connected',()=>{
    console.log('connected with database successfuly');
});

mongoose.connection.on('error',err=>{
    console.log(err);
});



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/contact',router);


const port = 3000;
app.listen(port,()=>console.log("apps are running on localhost"+port));
const express = require("express");
const app = express();
let mongoose = require("mongoose");
require("dotenv/config")

mongoose.connect(process.env.DB_Connection)

mongoose.connect("mongodb://localhost:27017/db",{useNewUrlParser: true ,useUnifiedTopology: true},(er)=>{    if (er){        console.log(er);    }    else     console.log('connected')})

let Person = require("./profil/Person")

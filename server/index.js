const express = require("express")
const cors = require('cors');
const app = express()
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const mongoose = require("mongoose")
const user = require('./Model/schema')
const route = require("./Routes/create")
app.use(express.json())
app.use(route)
mongoose.connect('mongodb+srv://Osama:123@cluster0.fhb2cmx.mongodb.net/Tracking').then(() => console.log('Connected!')).catch(() => {
    console.log("Error")
})

app.listen(8080)
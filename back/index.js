const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const app = express()
app.use(cors())



app.get("/",(req,res)=>{
res.send("hello world")
})

app.listen(3000,console.log('server on'))

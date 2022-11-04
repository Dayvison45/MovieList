const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
require('dotenv').config()
const app = express()
app.use(cors())

const userModel = require("./models/userModel")
const linkDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3v8vfkh.mongodb.net/MovieList?retryWrites=true&w=majority`
mongoose.connect(linkDB).then(console.log("database connect")).catch(err=>console.log(err))

// midleware
async function checktoken (req,res,next){
    const authHeader = await req.headers['authorization']
   
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
      return res.status(401).json({msg:"acesso negado"+token})
    }
    try{
  jwt.verify(token,secret)
  next()}
  catch(err){console.log(err)}}

  //login
  app.post("/login", async(req,res)=>{
    const {id} = req.body
   const user = await userModel.findOne({_id:id})
   try{const token= jwt.sign({
    id:user._id
      },secret,{expiresIn:600000})
  user.updateOne({token:token})
  let  newuser = user
  newuser.password = null
  res.status(200).json({newuser,token})
  }catch(err){
  console.log(err)}
})
  app.post('/log',checktoken, async(req,res)=>{
  const {id} = req.body
   const user = await userModel.findOne({_id:id})
   try{const token= jwt.sign({
    id:user._id
      },secret,{expiresIn:600000})
  user.updateOne({token:token})
  let  newuser = user
  newuser.password = null
  res.status(200).json({newuser,token})
  }catch(err){
  console.log(err)}
  })

  app.post('/addlist', async(req,res)=>{

})
  app.get('/list', async(req,res)=>{

})

app.get('/movies', async(req,res)=>{

})

app.get('/series', async(req,res)=>{

})





app.get("/", async(req,res)=>{
res.send("hello world")
const user = await userModel.find()
console.log(user)
})

app.listen(3000,console.log('server on'))

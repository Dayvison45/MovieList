const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
const userModel = require("./models/userModel")
const { default: axios } = require("axios")
const linkDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3v8vfkh.mongodb.net/MovieList?retryWrites=true&w=majority`
mongoose.connect(linkDB).then(console.log("database connect")).catch(err=>console.log(err))


//
const tmdblinkmovie =`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US` 
const tmdblinktv = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US`




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
  const movies = []
  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=28`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=12`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=16`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  
  
  res.status(200).json(movies)
})

app.get('/series', async(req,res)=>{
  const movies = []
  await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=10759`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=16`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_genres=35`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
  
  
  res.status(200).json(movies)
})





app.get("/", async(req,res)=>{
const movies = []
await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US`).then(response=>movies.push(response.data)).catch(err=>console.log(err))
await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`).then(response=>movies.push(response.data)).catch(err=>console.log(err))


res.status(200).json(movies)
})

app.listen(3000,console.log('server on'))

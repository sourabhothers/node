const express=require("express")
const app=express()
const router=express.Router()

let time=1

app.get('/', (req, res, err)=>{
    res.send(`Hello for all : ${time}`)
    time++
})


app.listen(8080, ()=>{
    console.log('App started successfully')
})
const express=require('express')
require('dotenv').config()


const app=express()

app.get('/',(req,res)=>{
    res.send("hello from backend")
})

const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
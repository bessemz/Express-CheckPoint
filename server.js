const exprees=require('express')
const logger=require('./middleware/logger')
const fs=require('fs')

// const cors=require('cors')


const app=exprees()
const port=8081

// app.use(cors)
app.get('/',(req,res)=>{
    fs.readFile('./homepage.html','utf-8',(err,data)=>{
err?res.send("err"):res.send(data)
    })
})  


app.get('/contact',(req,res)=>{
    fs.readFile('./Contactus.html','utf-8',(err,data)=>{
err?res.send("error"):res.send(data)
    })
})  

app.get('/service',logger,(req,res)=>{
    fs.readFile('./OurServices.html','utf-8',(err,data)=>{
err?res.send("err"):res.send(data)
    })
})  

app.listen(port,(err)=>err?console.log(err):console.log(`Server run on ${port}`))

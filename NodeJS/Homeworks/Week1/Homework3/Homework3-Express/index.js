const express = require('express')

const app = express()//assigns express function to app variable

app.get('/index.html', (req,res)=>{
    res.status(200).sendFile('/index.html', {root:__dirname})
})

app.get('/about.html', (req,res)=>{
    res.status(200).sendFile('/about.html', {root:__dirname})
})

app.get('/contact.html', (req,res)=>{
    res.status(200).sendFile('/contact.html', {root:__dirname})
})

const port = 5000 //create a  port in order to listen to our web server.

app.listen(port, ()=> {
    console.log('Web server is on port:', port)
})
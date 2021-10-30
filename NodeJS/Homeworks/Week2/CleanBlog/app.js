const express = require('express')
const app = express()

app.use(express.static('public'))//public dosyalarini disari ac.
app.use(function(req,res,next){
    console.log('Request:', req.path)
    next(); 
})


app.get('/', (req,res)=> {
    res.sendFile('index.html', {root:__dirname})
})


app.get('/index.html', (req,res)=> {
    res.sendFile('index.html', {root:__dirname})
})

app.get('/about.html', (req,res)=> {
    res.sendFile('about.html', {root:__dirname})
})


app.get('/add_post.html', (req,res)=> {
    res.sendFile('add_post.html', {root:__dirname})
})


const port = 3000

app.listen(port, ()=> {
    console.log('App works on port:', port)
})


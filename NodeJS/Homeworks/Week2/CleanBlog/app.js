const express = require('express') //import express
const ejs = require('ejs') //import ejs

const app = express() //express türden bir server instance


app.use(express.static('public'))//public dosyalarini disari ac.
app.use(function(req,res,next){ //middlewareini olustur.
    console.log('Request:', req.path) //bir sonraki requestin ne oldugunu anlamamız icin bize yazdır.
    next(); 
})

app.set("view engine", "ejs"); //hangi template engini kullanacagını bilgisayara bildir.



app.get('/', (req,res)=> {
    res.render('index', {root:__dirname})
})


app.get('/about', (req,res)=> {
    res.render('about')
})


app.get('/add_post', (req,res)=> {
    res.render('add_post')
})


const port = 3000

app.listen(port, ()=> {
    console.log('App works on port:', port)
})


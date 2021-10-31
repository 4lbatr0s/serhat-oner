const express = require('express') //import express
const mongoose = require('mongoose')//mongoose import.
const ejs = require('ejs') //import ejs

const path = require('path')
const Post = require('./models/Post')



const app = express() //express türden bir server instance

// connect db
mongoose.connect('mongodb://localhost/clean-blog-test-db', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


//MIDDLEWARE
app.use(express.json()) //to send json files.
app.use(express.static('public'))//in order display static files in the web browser.
app.use(function(req,res,next){ //
    console.log('Request:', req.path) //console.log the next request.
    next(); 
})

app.set("view engine", "ejs"); //tells the browser what view engine we are going to use.


//routes
app.get('/', async (req,res)=> {
    const posts = await Post.find({}) //wait until index page renders the posts.
    res.render('index', {
        posts
    })
})

//to fetch id information from index.ejs
app.get('/posts/:id', async (req,res)=> {
    // console.log(req.params.id) //show the request id.
    const post = await Post.findById(req.params.id) //find the requested post by it's id number, and wait it until it does it's job.
    res.render('post', {
        post
    })
})



app.get('/about', (req,res)=> {
    res.render('about')
})


app.get('/add_post', (req,res)=> {
    res.render('add_post')
})

app.get('/post', (req,res)=> {
    res.render('post')
})

app.post('/posts', async (req, res) => { // async - await yapısı kullanacğız.
    await Post.create(req.body) // thanks to the Post model, we are turning our request body into a database document.
    console.log(req.body) 
    res.redirect('/')
  });


const port = 3000

app.listen(port, ()=> {
    console.log('App works on port:', port)
})


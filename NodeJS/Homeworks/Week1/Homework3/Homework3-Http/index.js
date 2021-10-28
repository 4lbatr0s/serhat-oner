const http = require('http') //we use core http module of Node.js 

const server = http.createServer((req,res)=> {

    const url = req.url //our url variable is equal to the endpoints we will be asking for.
    if(url == '/'){
        res.writeHead(200, {'Content-Type':'text/html'}) //200->positive  text/html-> response type.
        res.write('<h1>INDEX PAGE</h1>')
    }
    else if(url == '/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>ABOUT PAGE</h1>')
    }
    else if(url == '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>CONTACT PAGE</h1>')
    } else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write('<h1>404 NOT FOUND</h1>')
    }
    console.log('a request has been sent.')
     
    res.end() //we have to put an end to respond for we will get the response page.
})


const port = 3000 //our port adress.

//server.listen is the first function to work when you initialize your web server.
server.listen(port, ()=> {
    console.log(`Server has been started at port:${port}'`)
})
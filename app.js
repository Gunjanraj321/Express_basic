const http = require('http')

const express = require('express')

const app = express();

app.use((req,res,next)=>{
    res.send('<h1> hello to node js </h1>')
    console.log('in the middleware')
    next();
})
app.use((req,res,next)=>{
    //res.send({ "key1": "value1" })
    console.log('in the another middleware')
})

// const server = http.createServer(app);
// server.listen(3000)

app.listen(3000)
const express = require('express');
const Book = require('./models/book');
const { log } = require('node:console');

//! Express Instance
const app= express();

app.post('api/v1/books',(req,res)=>{
    console.log(req.body);
    
})

//! start the server
const PORT=5000;
app.listen(PORT,console.log(`Server is running on port number : ${PORT}`));

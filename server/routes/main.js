const express = require('express')
const router = express.Router()

router.get('', (req, res) =>{
    // res.send("hello world")
    // create data as objects
    const locals = {
        title: "NodeJS Blog",
        description: "Simple Blog creted with NodeJS, Express & MongoDB"
    }
    
    // use local as data
    res.render('index', {locals}) // rendering index.ejs
})

router.get('/about', (req, res) =>{
    res.render('about') // rendering about.ejs
})

module.exports = router
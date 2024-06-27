require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')

// import database connection
const connectDB = require('./server/config/db')

const app = express()
const PORT = 5000 || process.env.PORT // if you publish online to a server

// connect to db
connectDB()

app.use(express.static('public'))

// template Engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main'))

app.listen(PORT,()=> {
    console.log(`App listening on port ${PORT}`)
})
const express = require('express')
require('dotenv').config()

const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//static files
app.use(express.static('public'))

//Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const locals = {
    title: 'NodeJs notes',
    description: 'Notes App By Shubham Maske'
  }
  res.render('index', locals)
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

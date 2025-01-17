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

// routes
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/dashboard'))


// page not found error 
app.get('*', function (req, res) {
  res.status(404).render('404')
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

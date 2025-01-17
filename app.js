const express = require('express')
require('dotenv').config()

const expressLayouts = require('express-ejs-layouts')
const  connectDB = require('./server/config/db')

const session = require('express-session')
const passport = require('passport')
const mongoStore = require('connect-mongo')
const MongoStore = require('connect-mongo')



const app = express()
const port = process.env.PORT || 3000

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  }),
  cookie: { maxAge: 3500000}
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// connect the database
connectDB();

//static files
app.use(express.static('public'))

//Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

// routes
app.use('/', require('./server/routes/auth'))
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/dashboard'))


// page not found error 
app.get('*', function (req, res) {
  res.status(404).render('404')
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

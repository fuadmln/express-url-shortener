const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/ShortUrl')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

mongoose.connection.once('open', function () {
  console.log('MongoDB database connection established successfully')
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}) )

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shortUrl', async (req, res) => {
  console.log(req.body.fullUrl)
  await ShortUrl.create({ full: req.body.fullUrl})
  res.redirect('/')
})

app.listen(3000, () => console.log('server started'))
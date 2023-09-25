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

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', {shortUrls})
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})
  
  if (shortUrl == null) { res.status(404).send('URL not found'); return; }

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(`https://${shortUrl.full}`)
})

app.post('/shortUrl', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl})
  res.redirect('/')
})

app.get('/:shortUrl/delete', async (req, res) => {
  const deleted = await ShortUrl.findOneAndDelete({ short: req.params.shortUrl })
  if(!deleted) console.log('delete failed')
  else console.log(`${deleted.full} successfully deleted`)

  res.redirect('/')
})

app.listen(3000, () => console.log('server started'))
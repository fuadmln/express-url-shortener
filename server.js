const express = require('express')
const mongoose = require('mongoose')
const ShortUniqueId = require('short-unique-id')

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}) )

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => console.log('server started'))
const express = require('express')
const mongoose = require('mongoose')
const ShortUniqueId = require('short-unique-id')

const app = express()

app.get('/', (req, res) => {
  res.send(`hello`)
})

app.listen(3000, () => console.log('server started'))
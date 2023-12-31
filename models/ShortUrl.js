const mongoose = require('mongoose')
const ShortUniqueId = require('short-unique-id')

const suid = new ShortUniqueId({ length: 8 });

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: () => generateShortId()
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

function generateShortId() {return suid.rnd()}

module.exports = mongoose.model('ShortUrl', shortUrlSchema)
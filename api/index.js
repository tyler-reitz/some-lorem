const express = require('express')
const logger = require('morgan')
const api = require('./routes/')

const PORT = 3000
const app = express()

app.use(logger('dev'))
app.get('/api', api.find)
app.get('/api/tfidf', api.tfidf)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// add {force: true} inside .sync() to clear all tables
sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
  })

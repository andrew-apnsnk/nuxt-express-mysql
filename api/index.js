const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const serverRoutes = require('./routes/user.routes.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serverRoutes)

module.exports = {
    path: '/api',
    handler: app
}
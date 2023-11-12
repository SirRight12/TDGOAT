const express = require('express')
const app = express()
const port = 3000
const http = require("http")
const server = http.createServer(app)
app.use(express.static('public'))
server.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
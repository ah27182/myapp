const express = require('express')
const app = express()

let res = app.get('/', function (req, res) {
    res.send('')
    console.log('Request sent!')
    console.log(req.body)
})

app.listen(3000, function () {

    console.log('Example app listening on port 3000!')
})
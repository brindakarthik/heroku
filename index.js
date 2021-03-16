require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')

const app = express()

app.get('/', (req, res) => {
res.send("welcome to OA")

})



app.listen( process.env.PORT, () => console.log(`Zoom Web SDK Sample Signature Node.js on port ${port}!`))

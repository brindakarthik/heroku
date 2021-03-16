
const express = require('express')


const app = express()

app.get('/', (req, res) => {
res.send("welcome to OA")

})



app.listen( process.env.PORT)

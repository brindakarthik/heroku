

const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')

const app = express()

app.get('/', (req, res) => {
res.send("welcome to KB")

})


var server = app.listen(process.env.PORT || 5000, function () {
 
  console.log("Express is working on port ");
});

